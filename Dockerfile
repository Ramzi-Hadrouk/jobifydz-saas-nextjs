# Dockerfile

# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source files
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Production image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set permissions
RUN chown -R nextjs:nodejs .

# Set the user
USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# Set environment variables
ENV PORT=3000


# The standalone server file is always server.js
CMD ["node", "server.js"]

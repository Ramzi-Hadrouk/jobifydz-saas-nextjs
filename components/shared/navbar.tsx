"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggel"; // Ensure this path points to your ModeToggle component

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Replace with actual auth logic

  const navLinks = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b">
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          jobifyDz
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.title}
            </Link>
          ))}

          {/* Authentication Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAuthenticated(!isAuthenticated)}
          >
            {isAuthenticated ? (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </>
            )}
          </Button>

          {/* Theme Toggle */}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left"  className="grid grid-cols-1 align-middle p-10">
              <div className="flex flex-col space-y-4 mt-4">
                <ModeToggle />
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAuthenticated(!isAuthenticated)}
                >
                  {isAuthenticated ? (
                    <>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </>
                  )}
                </Button>

                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

import { LoginForm } from "@/features/auth";

export default function Login() {
  return (
    <div className="bg-background grid min-h-[100vh-55px] place-items-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm grid place-items-center">
        <LoginForm />
      </div>
    </div>
  );
}

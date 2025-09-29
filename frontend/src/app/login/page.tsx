// src/app/register/page.tsx
import LoginComponent from "@/components/auth/LoginPage";

export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1020] px-4">
      <div className="w-full max-w-md">
        <LoginComponent />
      </div>
    </main>
  );
}

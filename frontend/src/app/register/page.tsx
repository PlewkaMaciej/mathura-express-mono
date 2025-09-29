// src/app/register/page.tsx
import RegisterComponent from "@/components/auth/RegisterPage";

export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1020] px-4">
      <div className="w-full max-w-md">
        <RegisterComponent />
      </div>
    </main>
  );
}

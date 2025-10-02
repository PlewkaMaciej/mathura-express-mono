// src/app/register/page.tsx
import { clerkSignAppearance } from "../../../clerkStyles/clerkSignUpAppearance";
import { SignUp } from "@clerk/nextjs";
export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1020] px-4">
      <div className="w-full max-w-md">
        <div className="w-full max-w-md mb-7">
          <SignUp
            appearance={clerkSignAppearance}
            path="/register"
            routing="path"
            signInUrl="/sign-in"
          />
        </div>
      </div>
    </main>
  );
}

// src/app/register/page.tsx
"use client";
import { SignUp } from "@clerk/nextjs";

import { clerkSignAppearance } from "../../../../clerkStyles/clerkSignUpAppearance";

export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1020] px-4">
      <div className="w-full max-w-md">
        <SignUp
          path="/register"
          routing="path"
          signInUrl="/rgister"
          appearance={clerkSignAppearance}
        />
      </div>
    </main>
  );
}

import { FormInput } from "@/components/FormInput";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1020] px-4">
      <div className="w-full max-w-md mb-7">
        <form className="bg-white/5 p-6 rounded-lg">
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="twoj@mail.com"
            icon={<CheckCircle2 />}
          />
          <div className="mt-4">
            <FormInput
              name="password"
              label="Hasło"
              type="password"
              placeholder="Hasło"
            />
          </div>

          <button className="mt-6 w-full bg-[#7CF9C2] text-[#041018] py-2 rounded-md font-semibold">
            Zaloguj
          </button>

          <Link
            href={"/register"}
            className="text-[14px]  text-[#F3EAD7]/90 hover:text-[#F3EAD7] pt-5"
          >
            Nie masz konta? Zarejestruj się
          </Link>
        </form>
      </div>
    </main>
  );
}

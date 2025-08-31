"use client";
import { FormInput } from "@/components/FormInput";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterComponent() {
  type FormValues = { email: string; password: string };
  const schema = Yup.object({
    email: Yup.string().email("Nieprawidłowy email").required("Wymagane"),
    password: Yup.string().min(6, "Min. 6 znaków").required("Wymagane"),
  });
  const formik = useFormik<FormValues>({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(null);
      setSubmitting(true);
    },
  });
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1020] px-4">
      <div className="w-full max-w-md mb-7">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white/5 p-6 rounded-lg"
        >
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="twoj@mail.com"
            icon={<CheckCircle2 />}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
          <div className="mt-4">
            <FormInput
              name="password"
              label="Hasło"
              type="password"
              placeholder="Hasło"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div>{formik.errors.password}</div>
            )}
            {formik.status && <div>{formik.status}</div>}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="mt-6 w-full bg-[#7CF9C2] text-[#041018] py-2 rounded-md font-semibold disabled:opacity-60"
          >
            {formik.isSubmitting ? "Tworzenie konta..." : "Zarejestruj konto"}
          </button>

          <Link
            href={"/login"}
            className="text-[14px]  text-[#F3EAD7]/90 hover:text-[#F3EAD7] pt-5"
          >
            Masz konto? Zaloguj się
          </Link>
        </form>
      </div>
    </main>
  );
}

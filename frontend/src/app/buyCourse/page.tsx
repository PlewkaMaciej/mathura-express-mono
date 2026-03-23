import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import BuyCourseButton from "@/components/BuyCourseButton";
import prisma from "@/lib/prisma";

export default async function BuyCoursePage() {
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    return (
      <main className="p-6 text-white">
        <h1 className="text-2xl font-bold">Kup kurs</h1>
        <p className="mt-2">Musisz się najpierw zalogować.</p>

        <Link
          href="/sign-in"
          className="mt-4 inline-block rounded bg-yellow-400 px-4 py-2 font-semibold text-black"
        >
          Sign in
        </Link>
      </main>
    );
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUserId },
  });

  if (!user) {
    return (
      <main className="p-6 text-white">
        <h1 className="text-2xl font-bold">Kup kurs</h1>
        <p className="mt-2">Nie znaleziono użytkownika.</p>
      </main>
    );
  }

  if (user.boughtCourse) {
    return (
      <main className="p-6 text-white">
        <h1 className="text-2xl font-bold">Kup kurs</h1>
        <p className="mt-2">Już kupiłeś ten kurs.</p>

        <Link
          href="/library"
          className="mt-4 inline-block rounded bg-yellow-400 px-4 py-2 font-semibold text-black"
        >
          Go to library
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 text-white">
      <h1 className="text-2xl font-bold">Kup kurs</h1>
      <p className="mt-2">Jednorazowa płatność. Pełny dostęp.</p>

      <div className="mt-4">
        <BuyCourseButton />
      </div>
    </main>
  );
}

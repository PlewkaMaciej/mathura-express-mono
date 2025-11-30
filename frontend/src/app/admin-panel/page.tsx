// app/admin-panel/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AdminTaskForm } from "@/components/adminPanel/AdminTaskForm";

export default async function AdminPanelPage() {
  const user = await currentUser();

  const isAdmin = user?.publicMetadata?.role === "admin";

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-[#F3EAD7]">
      <div className="mx-auto max-w-[1600px] px-4 2xl:px-10 py-6 flex gap-6">
        <aside className="w-64 shrink-0 border border-[#2C3B55] rounded-2xl bg-[rgba(11,27,43,0.9)] p-4">
          <h2 className="text-lg font-semibold mb-4">Panel administratora</h2>
          <nav className="space-y-2">
            <button
              type="button"
              className="w-full text-left px-3 py-2 rounded-xl bg-[#FFC857]/10 border border-[#FFC857]/40 text-sm font-medium hover:bg-[#FFC857]/20"
            >
              Dodaj zadanie
            </button>
          </nav>
        </aside>

        <section className="flex-1 border border-[#2C3B55] rounded-2xl bg-[rgba(11,27,43,0.9)] p-6">
          <h1 className="text-2xl font-semibold mb-4">Dodaj zadanie</h1>
          <p className="text-sm text-[#F3EAD7]/70 mb-6">
            Uzupełnij formularz, aby dodać nowe zadanie do bazy.
          </p>

          <AdminTaskForm />
        </section>
      </div>
    </main>
  );
}

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
    <main className="min-h-screen bg-[#0B1020] text-[#F5F7FF]">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_480px_at_10%_0%,#1b2252_18%,transparent_60%),radial-gradient(780px_500px_at_100%_10%,#1e3a8a_16%,transparent_60%)]" />
        <div className="mx-auto max-w-[1600px] px-4 2xl:px-10 py-8 flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 shrink-0 border border-[#273258] rounded-2xl bg-[#0E1630]/80 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <h2 className="text-lg font-semibold mb-4 tracking-tight">
              Panel administratora
            </h2>
            <nav className="space-y-2 text-sm">
              <button
                type="button"
                className="w-full text-left px-3 py-2 rounded-xl bg-[#7CF9C2]/10 border border-[#7CF9C2]/40 font-medium text-[#E2FDF0] hover:bg-[#7CF9C2]/15 hover:border-[#7CF9C2]/60 transition"
              >
                Dodaj zadanie
              </button>
            </nav>
          </aside>

          <section className="flex-1 border border-[#273258] rounded-2xl bg-[#0E1630]/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
              Dodaj zadanie
            </h1>
            <p className="text-sm text-[#C9D2EE] mb-6 max-w-xl">
              Uzupełnij formularz, aby dodać nowe zadanie do bazy zadań
              MathuraExpress.
            </p>

            <AdminTaskForm />
          </section>
        </div>
      </div>
    </main>
  );
}

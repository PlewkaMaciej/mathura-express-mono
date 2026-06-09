import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AdminTaskForm } from "@/components/adminPanel/AdminTaskForm";
import { FilePlus2, Layers3, ShieldCheck } from "lucide-react";

export default async function AdminPanelPage() {
  const user = await currentUser();

  const isAdmin = user?.publicMetadata?.role === "admin";

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#172033]">
      <div className="border-b border-[#d8e0ec] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#cfd9e8] bg-[#f7fafc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#526173]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#1f8f6a]" />
              Panel administratora
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">
              Panel administratora
            </h1>
            <p className="mt-1 text-sm font-medium text-[#64748b]">
              Zarządzanie bazą zadań
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:flex">
            <div className="rounded-lg border border-[#d8e0ec] bg-[#f8fafc] px-4 py-3">
              <div className="text-xs font-medium text-[#64748b]">Widok</div>
              <div className="mt-1 text-sm font-semibold text-[#172033]">
                Edytor zadań
              </div>
            </div>
            <div className="rounded-lg border border-[#d8e0ec] bg-[#f8fafc] px-4 py-3">
              <div className="text-xs font-medium text-[#64748b]">Status</div>
              <div className="mt-1 text-sm font-semibold text-[#1f8f6a]">
                Aktywny
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="h-fit rounded-lg border border-[#d8e0ec] bg-white p-3 shadow-sm">
          <nav className="space-y-1 text-sm">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-md bg-[#e8f7f1] px-3 py-2.5 text-left font-semibold text-[#17684f] ring-1 ring-inset ring-[#b8ead8]"
            >
              <FilePlus2 className="h-4 w-4" />
              Dodaj zadanie
            </button>
            <div className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[#64748b]">
              <Layers3 className="h-4 w-4" />
              Sekcje i poddziały
            </div>
          </nav>
        </aside>

        <section className="min-w-0 rounded-lg border border-[#d8e0ec] bg-white shadow-sm">
          <div className="border-b border-[#e2e8f0] px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#111827]">
                  Nowe zadanie
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-[#64748b]">
                  Uzupełnij treść, wybierz dział i skonfiguruj ocenianie przed
                  zapisaniem zadania.
                </p>
              </div>
              <div className="rounded-md bg-[#f8fafc] px-3 py-2 text-xs font-medium text-[#64748b] ring-1 ring-inset ring-[#e2e8f0]">
                MathuraExpress
              </div>
            </div>
          </div>

          <div className="px-5 py-5 sm:px-6">
            <AdminTaskForm />
          </div>
        </section>
      </div>
    </main>
  );
}

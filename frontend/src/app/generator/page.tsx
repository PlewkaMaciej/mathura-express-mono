import { NextPage } from "next";
import MaturyPanel from "../../components/MaturyPanel";

const MaturyPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-[#0B1020] text-[#F5F7FF]">
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="rounded-2xl bg-[#0E1426]/80 ring-1 ring-white/10 shadow-sm p-6 md:p-8">
          <h1 className="text-2xl font-semibold mb-6">Generator</h1>
          <MaturyPanel />
        </div>
      </div>
    </main>
  );
};

export default MaturyPage;

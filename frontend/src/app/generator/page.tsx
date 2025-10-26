import { NextPage } from "next";
import MaturyPanel from "../../components/MaturyPanel";

const MaturyPage: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Twoje matury</h1>
      <MaturyPanel />
    </div>
  );
};

export default MaturyPage;

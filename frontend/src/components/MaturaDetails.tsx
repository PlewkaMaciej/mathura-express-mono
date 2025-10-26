"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Task {
  content: string;
  options: { A: string; B: string; C: string; D: string };
}

interface Matura {
  id: string;
  name: string;
  tasks: Task[];
}

const MaturaDetails = () => {
  const [matura, setMatura] = useState<Matura | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { examId } = useParams();

  console.log("examId:", examId);

  useEffect(() => {
    if (!examId) {
      console.log("Brak examId, kończymy...");
      return;
    }

    const fetchMaturaDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/maturas/getSingleMatura/${examId}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch matura details: ${res.statusText}`);
        }
        const data: Matura = await res.json();
        console.log("Otrzymane dane:", data);
        setMatura(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMaturaDetails();
  }, [examId]);

  return (
    <div>
      {loading ? (
        <div>Ładowanie szczegółów matury...</div>
      ) : error ? (
        <div className="text-red-500">Błąd: {error}</div>
      ) : (
        <div>
          <h2>Szczegóły matury {matura?.id}</h2>
          <pre>{JSON.stringify(matura, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MaturaDetails;

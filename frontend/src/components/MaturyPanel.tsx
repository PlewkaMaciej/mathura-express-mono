"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MaturyPanel = () => {
  const [matury, setMatury] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMatury = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/maturas/generate");
        if (!res.ok) {
          throw new Error(`Failed to fetch matury: ${res.statusText}`);
        }
        const data = await res.json();
        setMatury(data);
      } catch (error: any) {
        console.error("Błąd podczas pobierania matur:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatury();
  }, []);

  const generateNewMatura = async () => {
    try {
      const res = await fetch("/api/maturas/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error generating matura: ${res.statusText}`);
      }

      const data = await res.json();
      if (data?.examId) {
        router.push(`/singleMatura/${data.examId}`);
      }
    } catch (error: any) {
      console.error("Błąd podczas generowania matury:", error);
      setError(error.message);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Ładowanie...</div>
      ) : error ? (
        <div className="text-red-500">Błąd: {error}</div>
      ) : (
        <div>
          {matury.length > 0 ? (
            matury.map((matura: any) => (
              <div key={matura.id}>
                <h2>Matura {matura.id}</h2>
                <button
                  onClick={() => router.push(`/singleMatura/${matura.id}`)}
                >
                  Zobacz szczegóły
                </button>
              </div>
            ))
          ) : (
            <div>Brak matur do wyświetlenia.</div>
          )}
        </div>
      )}
      <button onClick={generateNewMatura}>Wygeneruj nową maturę</button>
    </div>
  );
};

export default MaturyPanel;

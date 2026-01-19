"use client";

interface Props {
  description?: string | null;
  visible: boolean; // kontroluje widoczność
}

export default function Description({ description, visible }: Props) {
  if (!description) return null;

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 max-h-[2000px] mt-4"
          : "opacity-0 max-h-0 overflow-hidden"
      }`}
    >
      <div className="bg-white shadow-lg rounded-xl p-6 w-full min-w-[300px] mx-auto">
        <h2 className="font-bold text-xl mb-3">Opis</h2>

        <div className="h-px bg-gray-300 mb-4" />

        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}

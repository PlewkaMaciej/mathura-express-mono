export default function Video() {
  return (
    <div className="flex flex-col items-center justify-start py-10 px-4">
      <video controls width="640" className="rounded-lg shadow-lg mb-6">
        <source
          src="https://ik.imagekit.io/03bfavfrg/MathuraExpress/O%20r%C3%B3%C5%BCnych%20sposobach%20rozwi%C4%85zywania%20nier%C3%B3wno%C5%9Bci.mp4?updatedAt=1761396315552"
          type="video/mp4"
        />
        Twoja przeglądarka nie obsługuje elementu video.
      </video>

      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition">
          Notatnik
        </button>
        <button className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition">
          Oceń materiał
        </button>
        <button className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition">
          Pytania
        </button>
      </div>
    </div>
  );
}

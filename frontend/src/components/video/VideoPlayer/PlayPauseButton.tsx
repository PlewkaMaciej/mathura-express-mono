"use client";

interface Props {
  visible: boolean;
  isPlaying: boolean;
  togglePlay: () => void;
}

export default function PlayPauseButton({
  visible,
  isPlaying,
  togglePlay,
}: Props) {
  const PlayIcon = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <path d="M5 3v18l15-9L5 3z" />
    </svg>
  );

  const PauseIcon = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );

  return (
    <button
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause" : "Play"}
      className={`absolute transition-all duration-300 
        flex items-center justify-center
        text-white 
        bg-gradient-to-br from-black/70 to-black/40 
        hover:from-black/80 hover:to-black/60 
        rounded-full p-6
        shadow-lg backdrop-blur-md
        ring-2 ring-white/10 hover:ring-white/20
        transform hover:scale-105 active:scale-95
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 40,
          height: 40,
          color: "white",
        }}
      >
        {isPlaying ? PauseIcon : PlayIcon}
      </span>
    </button>
  );
}

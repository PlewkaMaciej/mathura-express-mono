"use client";

import { useState, useRef } from "react";
import { Stage, Layer, Line, Circle } from "react-konva";

type Tool = "pen" | "eraser" | "line" | "circle";

type Shape =
  | { id: string; tool: "pen" | "eraser"; points: number[] }
  | { id: string; tool: "line"; points: number[] }
  | { id: string; tool: "circle"; x: number; y: number; r: number };

type Props = {
  disabled?: boolean;
  onScreenshotChange?: (dataUrl: string | null) => void;
};

export function InlineDrawingCanvas({
  disabled = false,
  onScreenshotChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [tool, setTool] = useState<Tool>("pen");
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [current, setCurrent] = useState<Shape | null>(null);

  const stageRef = useRef<any>(null);

  const W = typeof window !== "undefined" ? window.innerWidth * 0.9 : 800;
  const H = typeof window !== "undefined" ? window.innerHeight * 0.7 : 600;

  const toolNames = {
    pen: "✏️ Pędzel",
    line: "📏 Linia",
    circle: "⭕ Koło",
    eraser: "🧽 Gumka",
  };

  function toolButtonClass(t: Tool) {
    return `
      px-3 py-1 rounded-lg text-sm
      transition
      ${
        tool === t
          ? "bg-[#7CF9C2] text-black"
          : "bg-[#0f1f33] text-white hover:bg-[#1a2b45]"
      }
    `;
  }

  function getPos() {
    if (!stageRef.current) return null;
    return stageRef.current.getPointerPosition();
  }

  function generateId() {
    return Date.now().toString() + Math.random().toString(36).substring(2);
  }

  function handleDown() {
    if (disabled || !stageRef.current) return;

    const pos = getPos();
    if (!pos) return;

    const id = generateId();

    if (tool === "pen" || tool === "eraser") {
      setCurrent({ id, tool, points: [pos.x, pos.y] });
    }

    if (tool === "line") {
      setCurrent({
        id,
        tool: "line",
        points: [pos.x, pos.y, pos.x, pos.y],
      });
    }

    if (tool === "circle") {
      setCurrent({
        id,
        tool: "circle",
        x: pos.x,
        y: pos.y,
        r: 1,
      });
    }
  }

  function handleMove() {
    if (disabled || !current || !stageRef.current) return;

    const pos = getPos();
    if (!pos) return;

    if ("points" in current) {
      const pts = [...current.points];

      if (current.tool === "line") {
        pts[2] = pos.x;
        pts[3] = pos.y;
      } else {
        pts.push(pos.x, pos.y);
      }

      setCurrent({ ...current, points: pts });
    }

    if (current.tool === "circle") {
      const dx = pos.x - current.x;
      const dy = pos.y - current.y;

      setCurrent({
        ...current,
        r: Math.sqrt(dx * dx + dy * dy),
      });
    }
  }

  function handleUp() {
    if (disabled) return;

    if (current) {
      setShapes((prev) => [...prev, current]);
      setCurrent(null);
    }
  }

  function saveDrawing() {
    if (disabled || !stageRef.current) return;

    const uri = stageRef.current.toDataURL({
      pixelRatio: 1,
      mimeType: "image/jpeg",
      quality: 0.7,
    });

    if (uri && onScreenshotChange) {
      onScreenshotChange(uri);
    }

    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(true)}
        className="mt-3 rounded-lg border border-[#2C3B55] bg-[#081524] px-3 py-2 text-sm hover:border-[#7CF9C2] disabled:opacity-50"
      >
        ✏️ Otwórz rysowanie
      </button>

      {isOpen && !disabled && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-[#081524] border border-[#2C3B55] rounded-xl p-4 w-[95vw] h-[90vh] flex flex-col">
            {/* TOOLBAR */}
            <div className="flex gap-2 mb-3 flex-wrap items-center">
              <button
                className={toolButtonClass("pen")}
                onClick={() => setTool("pen")}
              >
                ✏️
              </button>

              <button
                className={toolButtonClass("line")}
                onClick={() => setTool("line")}
              >
                📏
              </button>

              <button
                className={toolButtonClass("circle")}
                onClick={() => setTool("circle")}
              >
                ⭕
              </button>

              {/* 🧽 OBOK KOŁA */}
              <button
                className={toolButtonClass("eraser")}
                onClick={() => setTool("eraser")}
              >
                🧽
              </button>

              {/* ❌ NA PRAWO */}
              <div className="ml-auto">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
                >
                  ❌
                </button>
              </div>

              {/* LABEL */}
              <div className="w-full text-sm text-[#7CF9C2] mt-1">
                Wybrane: {toolNames[tool]}
              </div>

              {/* DOLNE AKCJE */}
              <button onClick={() => setShapes([])} className="text-red-400">
                🗑 Wyczyść
              </button>

              <button onClick={saveDrawing} className="text-[#7CF9C2]">
                💾 Zapisz
              </button>
            </div>

            {/* CANVAS */}
            <Stage
              ref={stageRef}
              width={W}
              height={H}
              onPointerDown={handleDown}
              onPointerMove={handleMove}
              onPointerUp={handleUp}
              style={{ touchAction: "none" }}
            >
              <Layer>
                {shapes.map((s) => {
                  if (s.tool === "circle") {
                    return (
                      <Circle
                        key={s.id}
                        x={s.x}
                        y={s.y}
                        radius={s.r}
                        stroke="#7CF9C2"
                        strokeWidth={3}
                      />
                    );
                  }

                  return (
                    <Line
                      key={s.id}
                      points={s.points}
                      stroke={s.tool === "eraser" ? "#081524" : "#7CF9C2"}
                      strokeWidth={s.tool === "eraser" ? 20 : 4}
                      lineCap="round"
                      lineJoin="round"
                      tension={0.4}
                    />
                  );
                })}

                {current &&
                  (current.tool === "circle" ? (
                    <Circle
                      x={current.x}
                      y={current.y}
                      radius={current.r}
                      stroke="#7CF9C2"
                      strokeWidth={3}
                    />
                  ) : (
                    <Line
                      points={current.points}
                      stroke="#7CF9C2"
                      strokeWidth={4}
                      lineCap="round"
                    />
                  ))}
              </Layer>
            </Stage>
          </div>
        </div>
      )}
    </>
  );
}

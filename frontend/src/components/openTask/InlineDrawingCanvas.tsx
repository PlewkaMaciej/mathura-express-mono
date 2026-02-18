"use client";

import { useState, useRef } from "react";
import { Stage, Layer, Line, Circle } from "react-konva";

type Tool = "pen" | "eraser" | "line" | "circle";
type EraserMode = "brush" | "click";

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
  const [eraserMode, setEraserMode] = useState<EraserMode>("brush");
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [current, setCurrent] = useState<Shape | null>(null);

  const stageRef = useRef<any>(null);

  const W = typeof window !== "undefined" ? window.innerWidth * 0.8 : 800;
  const H = typeof window !== "undefined" ? window.innerHeight * 0.7 : 600;

  function handleDown(e: any) {
    if (disabled) return;

    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos) return;

    const id = crypto.randomUUID();

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
      setCurrent({ id, tool: "circle", x: pos.x, y: pos.y, r: 1 });
    }
  }

  function handleMove(e: any) {
    if (disabled || !current) return;

    const pos = e.target.getStage()?.getPointerPosition();
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
    if (disabled) return;

    const uri = stageRef.current?.toDataURL({
      pixelRatio: 1,
      mimeType: "image/jpeg",
      quality: 0.6,
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
          <div className="bg-[#081524] border border-[#2C3B55] rounded-xl p-4 w-[90vw] h-[90vh] flex flex-col">
            <div className="flex gap-2 mb-3 flex-wrap">
              <button onClick={() => setTool("pen")}>✏️</button>
              <button onClick={() => setTool("line")}>📏</button>
              <button onClick={() => setTool("circle")}>⭕</button>
              <button onClick={() => setTool("eraser")}>🧽</button>

              <button
                onClick={() => setShapes([])}
                className="ml-auto text-red-400"
              >
                🗑 Wyczyść
              </button>

              <button onClick={saveDrawing} className="text-[#7CF9C2]">
                💾 Zapisz rysunek
              </button>

              <button onClick={() => setIsOpen(false)}>Zamknij</button>
            </div>

            <Stage
              ref={stageRef}
              width={W}
              height={H}
              onMouseDown={handleDown}
              onMouseMove={handleMove}
              onMouseUp={handleUp}
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
                        strokeWidth={2}
                      />
                    );
                  }

                  return (
                    <Line
                      key={s.id}
                      points={s.points}
                      stroke={s.tool === "eraser" ? "#081524" : "#7CF9C2"}
                      strokeWidth={s.tool === "eraser" ? 18 : 2}
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
                      strokeWidth={2}
                    />
                  ) : (
                    <Line
                      points={current.points}
                      stroke="#7CF9C2"
                      strokeWidth={2}
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

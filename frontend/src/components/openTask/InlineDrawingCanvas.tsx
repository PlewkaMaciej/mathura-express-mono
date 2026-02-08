"use client";

import { useState } from "react";
import { Stage, Layer, Line, Circle } from "react-konva";

type Tool = "pen" | "eraser" | "line" | "circle";
type EraserMode = "brush" | "click";

type Shape =
  | { id: string; tool: "pen" | "eraser"; points: number[] }
  | { id: string; tool: "line"; points: number[] }
  | { id: string; tool: "circle"; x: number; y: number; r: number };

export function InlineDrawingCanvas() {
  const [isOpen, setIsOpen] = useState(false);
  const [tool, setTool] = useState<Tool>("pen");
  const [eraserMode, setEraserMode] = useState<EraserMode>("brush");
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [current, setCurrent] = useState<Shape | null>(null);

  const W = typeof window !== "undefined" ? window.innerWidth * 0.8 : 800;
  const H = typeof window !== "undefined" ? window.innerHeight * 0.7 : 600;

  function handleDown(e: any) {
    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos) return;

    if (tool === "eraser" && eraserMode === "click") return;

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
    if (!current) return;
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
    if (current) {
      setShapes((prev) => [...prev, current]);
      setCurrent(null);
    }
  }

  function handleEraseClick(id: string) {
    if (tool === "eraser" && eraserMode === "click") {
      setShapes((prev) => prev.filter((s) => s.id !== id));
    }
  }

  function renderShape(s: Shape) {
    if (s.tool === "circle") {
      return (
        <Circle
          key={s.id}
          x={s.x}
          y={s.y}
          radius={s.r}
          stroke="#7CF9C2"
          strokeWidth={2}
          onClick={() => handleEraseClick(s.id)}
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
        onClick={() => handleEraseClick(s.id)}
      />
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-3 rounded-lg border border-[#2C3B55] bg-[#081524] px-3 py-2 text-sm hover:border-[#7CF9C2]"
      >
        ✏️ Otwórz rysowanie
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-[#081524] border border-[#2C3B55] rounded-xl p-4 w-[90vw] h-[90vh] flex flex-col">
            <div className="flex gap-2 mb-3 flex-wrap">
              <button onClick={() => setTool("pen")}>✏️</button>
              <button onClick={() => setTool("line")}>📏</button>
              <button onClick={() => setTool("circle")}>⭕</button>

              <button onClick={() => setTool("eraser")}>🧽</button>

              {tool === "eraser" && (
                <>
                  <button
                    onClick={() => setEraserMode("brush")}
                    className={eraserMode === "brush" ? "text-[#7CF9C2]" : ""}
                  >
                    pędzel
                  </button>
                  <button
                    onClick={() => setEraserMode("click")}
                    className={eraserMode === "click" ? "text-[#7CF9C2]" : ""}
                  >
                    klik
                  </button>
                </>
              )}

              <button
                onClick={() => setShapes([])}
                className="ml-auto text-red-400"
              >
                🗑 Wyczyść
              </button>

              <button onClick={() => setIsOpen(false)}>Zamknij</button>
            </div>

            <Stage
              width={W}
              height={H}
              onMouseDown={handleDown}
              onMouseMove={handleMove}
              onMouseUp={handleUp}
            >
              <Layer>
                {shapes.map(renderShape)}
                {current && renderShape(current)}
              </Layer>
            </Stage>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useMemo, useRef, useState } from "react";
import {
  Check,
  Circle as CircleIcon,
  Eraser,
  Minus,
  PenLine,
  Trash2,
  X,
} from "lucide-react";
import { Stage, Layer, Line, Circle } from "react-konva";
import { MathRender } from "./MathRender";

type Tool = "pen" | "eraser" | "line" | "circle";

type Shape =
  | { id: string; tool: "pen" | "eraser"; points: number[] }
  | { id: string; tool: "line"; points: number[] }
  | { id: string; tool: "circle"; x: number; y: number; r: number };

type Props = {
  disabled?: boolean;
  taskTitle?: string;
  taskContent?: string;
  onScreenshotChange?: (dataUrl: string | null) => void;
};

export function InlineDrawingCanvas({
  disabled = false,
  taskTitle = "Treść zadania",
  taskContent,
  onScreenshotChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [tool, setTool] = useState<Tool>("pen");
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [current, setCurrent] = useState<Shape | null>(null);

  const stageRef = useRef<any>(null);

  const { width, height } = useMemo(() => {
    if (typeof window === "undefined") {
      return { width: 760, height: 520 };
    }

    return {
      width: Math.min(Math.max(window.innerWidth * 0.58, 340), 920),
      height: Math.min(Math.max(window.innerHeight * 0.58, 360), 620),
    };
  }, [isOpen]);

  const toolNames: Record<Tool, string> = {
    pen: "Pędzel",
    line: "Linia",
    circle: "Koło",
    eraser: "Gumka",
  };

  const tools: Array<{ id: Tool; icon: typeof PenLine; label: string }> = [
    { id: "pen", icon: PenLine, label: "Pędzel" },
    { id: "line", icon: Minus, label: "Linia" },
    { id: "circle", icon: CircleIcon, label: "Koło" },
    { id: "eraser", icon: Eraser, label: "Gumka" },
  ];

  function toolButtonClass(t: Tool) {
    return `inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
      tool === t
        ? "border-emerald-300 bg-emerald-300 text-slate-950"
        : "border-white/10 bg-white/[0.05] text-slate-100 hover:bg-white/[0.09]"
    }`;
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
        className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:bg-white/[0.08] disabled:opacity-50"
      >
        <PenLine className="h-4 w-4" aria-hidden />
        Otwórz rysowanie
      </button>

      {isOpen && !disabled && (
        <div className="fixed inset-0 z-50 bg-black/75 p-3 backdrop-blur-sm md:p-6">
          <div className="mx-auto flex h-full max-w-[1500px] flex-col overflow-hidden rounded-lg border border-white/10 bg-[#07111f] shadow-[0_40px_120px_-50px_rgba(0,0,0,1)]">
            <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-3">
              {tools.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={toolButtonClass(item.id)}
                    onClick={() => setTool(item.id)}
                    title={item.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </button>
                );
              })}

              <div className="ml-0 text-sm font-semibold text-emerald-300 md:ml-2">
                Wybrane: {toolNames[tool]}
              </div>

              <div className="ml-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShapes([])}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-200 transition hover:bg-red-500/15"
                >
                  <Trash2 className="h-4 w-4" aria-hidden />
                  Wyczyść
                </button>

                <button
                  type="button"
                  onClick={saveDrawing}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-3 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-200"
                >
                  <Check className="h-4 w-4" aria-hidden />
                  Zapisz
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-slate-100 transition hover:bg-white/[0.1]"
                  title="Zamknij"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-auto p-4 lg:grid-cols-[minmax(280px,380px)_1fr]">
              <aside className="max-h-[40vh] overflow-auto rounded-lg border border-white/10 bg-white/[0.04] p-4 lg:max-h-none">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Treść zadania
                </p>
                <h2 className="mt-2 text-lg font-bold text-white">
                  {taskTitle}
                </h2>
                <div className="mt-4 rounded-lg border border-white/10 bg-[#0b1726] p-4 leading-7 text-slate-100">
                  {taskContent ? (
                    <MathRender text={taskContent} />
                  ) : (
                    <span className="text-slate-400">
                      Brak treści zadania do wyświetlenia.
                    </span>
                  )}
                </div>
              </aside>

              <div className="min-w-0 overflow-auto rounded-lg border border-white/10 bg-white p-2">
                <Stage
                  ref={stageRef}
                  width={width}
                  height={height}
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
                            stroke="#059669"
                            strokeWidth={3}
                          />
                        );
                      }

                      return (
                        <Line
                          key={s.id}
                          points={s.points}
                          stroke={s.tool === "eraser" ? "#ffffff" : "#059669"}
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
                          stroke="#059669"
                          strokeWidth={3}
                        />
                      ) : (
                        <Line
                          points={current.points}
                          stroke={
                            current.tool === "eraser" ? "#ffffff" : "#059669"
                          }
                          strokeWidth={current.tool === "eraser" ? 20 : 4}
                          lineCap="round"
                        />
                      ))}
                  </Layer>
                </Stage>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

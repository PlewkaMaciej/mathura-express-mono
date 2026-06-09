"use client";

import { Field, ErrorMessage } from "formik";

interface Props {
  input: string;
}

const answers = [
  { name: "answerA", label: "A" },
  { name: "answerB", label: "B" },
  { name: "answerC", label: "C" },
  { name: "answerD", label: "D" },
];

export function ClosedTaskFields({ input }: Props) {
  return (
    <section className="rounded-lg border border-[#d8e0ec] bg-[#fbfdff] p-4">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[#111827]">
          Odpowiedzi ABCD
        </h3>
        <p className="mt-1 text-xs text-[#64748b]">
          Wpisz wszystkie warianty i wskaż jedną poprawną odpowiedź.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {answers.map((answer) => (
          <div key={answer.name} className="space-y-1.5">
            <label
              htmlFor={answer.name}
              className="block text-sm font-semibold text-[#334155]"
            >
              Odpowiedź {answer.label}
            </label>
            <Field
              id={answer.name}
              name={answer.name}
              placeholder={`Wpisz odpowiedź ${answer.label}`}
              className={input}
            />
            <ErrorMessage
              name={answer.name}
              component="div"
              className="text-xs font-medium text-[#dc2626]"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_160px]">
        <div className="space-y-1.5">
          <label
            htmlFor="correctAnswer"
            className="block text-sm font-semibold text-[#334155]"
          >
            Poprawna odpowiedź
          </label>
          <Field
            as="select"
            id="correctAnswer"
            name="correctAnswer"
            className={input}
          >
            <option value="">Wybierz poprawną</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </Field>
          <ErrorMessage
            name="correctAnswer"
            component="div"
            className="text-xs font-medium text-[#dc2626]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="points"
            className="block text-sm font-semibold text-[#334155]"
          >
            Punkty
          </label>
          <Field
            id="points"
            type="number"
            name="points"
            min="1"
            className={input}
          />
        </div>
      </div>
    </section>
  );
}

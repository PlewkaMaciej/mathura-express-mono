"use client";

import { Field, ErrorMessage } from "formik";
import clsx from "clsx";

interface Props {
  input: string;
}

export function ClosedTaskFields({ input }: Props) {
  return (
    <div className="space-y-4 mt-4 border border-[#2C3B55] rounded-lg p-4">
      <h3 className="font-semibold text-lg">Odpowiedzi (ABCD)</h3>

      <div className="grid gap-3">
        <Field name="answerA" placeholder="Odpowiedź A" className={input} />
        <ErrorMessage
          name="answerA"
          component="div"
          className="text-xs text-red-400"
        />

        <Field name="answerB" placeholder="Odpowiedź B" className={input} />
        <ErrorMessage
          name="answerB"
          component="div"
          className="text-xs text-red-400"
        />

        <Field name="answerC" placeholder="Odpowiedź C" className={input} />
        <ErrorMessage
          name="answerC"
          component="div"
          className="text-xs text-red-400"
        />

        <Field name="answerD" placeholder="Odpowiedź D" className={input} />
        <ErrorMessage
          name="answerD"
          component="div"
          className="text-xs text-red-400"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">Poprawna odpowiedź</label>
        <Field as="select" name="correctAnswer" className={input}>
          <option value="">Wybierz poprawną</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </Field>
        <ErrorMessage
          name="correctAnswer"
          component="div"
          className="text-xs text-red-400"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">Punkty</label>
        <Field type="number" name="points" min="1" className={input} />
      </div>
    </div>
  );
}

"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Items/Button";
import { useAuth } from "@clerk/nextjs";

interface QuestionProps {
  time?: number;
  videoId: string;
  buttonStateProps: [string, React.Dispatch<React.SetStateAction<string>>];
}

const Question = ({ time = 0, videoId, buttonStateProps }: QuestionProps) => {
  // ✅ OK

  const [buttonState, setButtonState] = buttonStateProps;
  const { userId, isLoaded } = useAuth();

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-semibold mb-10 text-gray-900 text-center">
        Dodaj pytanie
      </h2>

      <Formik
        initialValues={{
          title: "",
          text: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Tytuł jest wymagany")
            .min(3, "Tytuł musi mieć minimum 3 znaki"),
          text: Yup.string()
            .required("Pytanie jest wymagane")
            .min(5, "Pytanie musi mieć minimum 5 znaków"),
        })}
        onSubmit={async (values) => {
          if (!isLoaded || !userId) return;

          await fetch(`/api/videos/${videoId}/questions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: values.title,
              text: values.text,
              time: Math.floor(time),
              userId: userId,
            }),
          });

          setButtonState("");
        }}
      >
        {() => (
          <Form className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2 col-span-2">
              <label className="font-semibold text-gray-800 text-lg">
                Tytuł
              </label>

              <Field
                name="title"
                type="text"
                className="
                  border border-gray-300 
                  p-4 
                  rounded-xl 
                  bg-white
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-color-primary 
                  shadow-sm
                  transition-all
                  text-lg
                "
                placeholder="Wpisz tytuł pytania"
              />

              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Pytanie */}
            <div className="flex flex-col gap-2 col-span-2">
              <label className="font-semibold text-gray-800 text-lg">
                Zadaj pytanie
              </label>

              <Field
                name="text"
                as="textarea"
                className="
                  border border-gray-300 
                  p-4 
                  rounded-xl 
                  bg-white
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-color-primary 
                  shadow-sm
                  transition-all
                  text-lg
                  h-36
                  resize-none
                "
                placeholder="Wpisz treść pytania"
              />

              <ErrorMessage
                name="text"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="col-span-2 flex justify-end">
              <Button type="submit">Zadaj pytanie</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Question;

"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Items/Button";
interface QuestionProps {
  time: number;
}
const Question = ({ time }: QuestionProps) => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-semibold mb-10 text-gray-900 text-center">
        Dodaj pytanie
      </h2>

      <Formik
        initialValues={{
          title: "",
          question: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Tytuł jest wymagany")
            .min(3, "Tytuł musi mieć minimum 3 znaki"),
          question: Yup.string()
            .required("Pytanie jest wymagane")
            .min(5, "Pytanie musi mieć minimum 5 znaków"),
        })}
        onSubmit={(values) => {
          console.log("Wysłano:", values, time);
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
                  focus:border-color-primary
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

            <div className="flex flex-col gap-2 col-span-2">
              <label className="font-semibold text-gray-800 text-lg">
                Zadaj pytanie
              </label>

              <Field
                name="question"
                as="textarea"
                className="
                  border border-gray-300 
                  p-4 
                  rounded-xl 
                  bg-white
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-color-primary 
                  focus:border-color-primary
                  shadow-sm
                  transition-all
                  text-lg
                  h-36
                  resize-none
                "
                placeholder="Wpisz treść pytania"
              />

              <ErrorMessage
                name="question"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="col-span-2 flex justify-end">
              <Button>Zadaj pytanie</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Question;

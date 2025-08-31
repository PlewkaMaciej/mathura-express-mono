"use client";
import React, { forwardRef } from "react";

export type FormInputProps = {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | null;
  required?: boolean;
  autoComplete?: string;
  icon?: React.ReactNode;
  className?: string;
};
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      name,
      label,
      type = "text",
      placeholder,
      value,
      onBlur,
      onChange,
      error,
      required,
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor="(id ?? name)"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            {" "}
            {label} {required ? "*" : null}
          </label>
        )}
        <div
          className={`relative rounded-md ${
            error ? "ring-2 ring-red-400" : ""
          }`}
        >
          <input
            id={id ?? name}
            name={name}
            ref={ref}
            type={type}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            aria-invalid={Boolean(error)}
            className="w-full px-3 py-2 rounded bg-white/5 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
    );
  }
);

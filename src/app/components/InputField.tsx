"use client";

import { Field } from "formik";
import React from "react";

export interface InputFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
}

const InputField = ({ label, name, placeholder, ...rest }: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        name={name}
        placeholder={placeholder}
        {...rest}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow
        "
      />
    </div>
  );
};

export default InputField;

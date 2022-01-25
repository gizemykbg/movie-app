import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <div>
        <label htmlFor="field.name">{label}</label>
        <input {...field} {...props} autoComplete="off" />
      </div>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField;

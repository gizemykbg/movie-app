import React from "react";
import { ErrorMessage, useField } from "formik";
import { CardBody, CardFieldset, CardInput } from "./styles/CardStyles";

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <CardBody>
      <CardFieldset>
        <label htmlFor="field.name">{label}</label>
        <CardInput {...field} {...props} autoComplete="off" />
      </CardFieldset>
      <ErrorMessage component="div" name={field.name} className="error" />
    </CardBody>
  );
};

export default TextField;

import React, { memo, useMemo } from "react";
import { useField } from "formik";

import classNames from "./Input.module.css";

interface InputProps {
  label: string;
  name: string;
  options?: Array<{ title: string; value: string }>;
  type: "text" | "datetime-local" | "number" | "select";
}

const Input: React.FC<InputProps> = ({ label, name, options, type }) => {
  const [{ value, onChange }, { error }] = useField({ name });
  const children = useMemo(() => {
    if (type === "select") {
      return (
        <select
          className={classNames.input}
          onChange={({ target: { value } }) =>
            onChange({ target: { value, name } })
          }
          value={value}
        >
          <option> ----- </option>
          {options.map((itm) => (
            <option key={`option-${itm.title}`}>{itm.title}</option>
          ))}
        </select>
      );
    }
    return (
      <input
        type={type}
        className={classNames.input}
        id={name}
        aria-describedby={`${name}Help`}
        onChange={onChange}
        value={value}
      />
    );
  }, [value, type, options, name]);

  return (
    <div className={classNames.formGroup}>
      <label className={classNames.formLabel} htmlFor={name}>
        {label}
      </label>
      {children}
      <small id={`${name}Help`} className={classNames.helpText}>
        {error}
      </small>
    </div>
  );
};

export default memo(Input);

import React from "react";
import style from "./Input.module.css";

const Input = React.forwardRef(({ input, label }, ref) => (
  <div className={style.input}>
    <label className="" htmlFor={input.id}>
      {label}
    </label>
    <input ref={ref} {...input} />
  </div>
));

export default Input;

import style from "./Input.module.css";

function Input({ label, input }) {
  return (
    <div className={style.input}>
      <label className="" htmlFor={input.id}>
        {label}
      </label>
      <input {...input} />
    </div>
  );
}

export default Input;

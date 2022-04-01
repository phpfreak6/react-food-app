import { useRef, useState } from "react";
import Input from "../UI/Input/Input";
import style from "./MealItemForm.module.css";

function MealItemForm(properties) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amount_input_reference = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const entered_amount = +amount_input_reference.current.value;
    if (entered_amount < 1 || entered_amount > 5) {
      setAmountIsValid(false);
    }
    properties.onAddToCart(entered_amount);
  }

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amount_input_reference}
        label="Amount"
        input={{
          id: "amount_" + properties.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please Enter A Valid Value</p>}
    </form>
  );
}

export default MealItemForm;

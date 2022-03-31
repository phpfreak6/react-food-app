import Input from "../UI/Input/Input";
import style from "./MealItemForm.module.css";

function MealItemForm(properties) {
  return (
    <form className={style.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
}

export default MealItemForm;

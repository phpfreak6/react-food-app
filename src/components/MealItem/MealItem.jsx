import style from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";

function MealItem({ id, name, description, price: prop_price }) {
  const price = "$" + prop_price.toFixed(2);

  return (
    <li className={style.meal}>
      <div>
        <h3>{name}</h3>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

export default MealItem;

import { useContext } from "react";
import style from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartStore from "../../store/CartStore";

function MealItem({ id, name, description, price: prop_price }) {
  const cart = useContext(CartStore);

  const price = "$" + prop_price;

  const addToCartHandler = (amount) => {
    cart.addItem({ id: id, name: name, amount: amount, price: prop_price });
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{name}</h3>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
}

export default MealItem;

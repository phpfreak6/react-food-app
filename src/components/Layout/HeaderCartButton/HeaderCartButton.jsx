import { useContext } from "react";
import CartStore from "../../../store/CartStore";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import style from "./HeaderCartButton.module.css";

function HeaderCartButton(properties) {
  const cart = useContext(CartStore);

  const cart_count = cart.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={style.button} onClick={properties.onClickCartButton}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{cart_count}</span>
    </button>
  );
}

export default HeaderCartButton;

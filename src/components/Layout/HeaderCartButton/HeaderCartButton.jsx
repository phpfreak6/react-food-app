import { useContext, useEffect, useState } from "react";
import CartStore from "../../../store/CartStore";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import style from "./HeaderCartButton.module.css";

function HeaderCartButton(properties) {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cart = useContext(CartStore);

  const { items } = cart;

  const cart_count = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const bump_cart_class = `${style.button} ${
    buttonIsHighlighted ? style.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={bump_cart_class} onClick={properties.onClickCartButton}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{cart_count}</span>
    </button>
  );
}

export default HeaderCartButton;

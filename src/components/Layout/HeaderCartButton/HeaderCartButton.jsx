import CartIcon from "../../Cart/CartIcon/CartIcon";
import style from "./HeaderCartButton.module.css";

function HeaderCartButton(properties) {
  return (
    <button className={style.button} onClick={properties.onClickCartButton}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>2</span>
    </button>
  );
}

export default HeaderCartButton;

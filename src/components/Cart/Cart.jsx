import Modal from "../UI/Modal/Modal";
import style from "./Cart.module.css";

function Cart({ onClickCloseButton }) {
  const cartItemsArr = (
    <ul className={style["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClickCloseButton}>
      {cartItemsArr}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>25.62</span>
      </div>
      <div className={style.actions}>
        <button onClick={onClickCloseButton} className={style["button--alt"]}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;

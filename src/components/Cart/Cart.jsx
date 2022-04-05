import Modal from "../UI/Modal/Modal";
import style from "./Cart.module.css";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartStore from "../../store/CartStore";

function Cart({ onClickCloseButton }) {
  const store = useContext(CartStore);
  const total_amount = `$${store.total_amount.toFixed(2)}`;
  const hasItems = store.items.length > 0;

  const removeItemHandler = (id) => {
    store.removeItem(id);
  };

  const addItemHandler = (item) => {
    store.addItem({ ...item, amount: 1 });
  };

  const cartItemsArr = (
    <ul className={style["cart-items"]}>
      {store.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClickCloseButton}>
      {cartItemsArr}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{total_amount}</span>
      </div>
      <div className={style.actions}>
        <button onClick={onClickCloseButton} className={style["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

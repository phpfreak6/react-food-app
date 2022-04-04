import { useReducer } from "react";
import CartStore from "./CartStore";

const defaultCartState = {
  items: [],
  total_amount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addItemToCart":
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.total_amount + action.item.price * action.item.amount;
      return { items: updatedItems, total_amount: updatedTotalAmount };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCart(item) {
    dispatchCartAction({ type: "addItemToCart", item: item });
  }

  function removeItemFromCart(id) {
    
  }

  const cart = {
    items: cartState.items,
    total_amount: cartState.total_amount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return <CartStore.Provider value={cart}>{props.children}</CartStore.Provider>;
};

export default CartProvider;

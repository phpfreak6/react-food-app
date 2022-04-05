import { useReducer } from "react";
import CartStore from "./CartStore";

const defaultCartState = {
  items: [],
  total_amount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  let existingCartItemIndex;
  switch (action.type) {
    case "removeItemFromCart":
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existing_item = state.items[existingCartItemIndex];
      const updated_total_amount = state.total_amount - existing_item.price;

      if (existing_item.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existing_item,
          amount: existing_item.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return { items: updatedItems, total_amount: updated_total_amount };

    case "addItemToCart":
      const updatedTotalAmount =
        state.total_amount + action.item.price * action.item.amount;
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existing_cart_item = state.items[existingCartItemIndex];
      if (existing_cart_item) {
        let updatedItem;
        updatedItem = {
          ...existing_cart_item,
          amount: existing_cart_item.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
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
    dispatchCartAction({ type: "removeItemFromCart", id: id });
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

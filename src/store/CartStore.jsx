import React from "react";

const CartStore = React.createContext({
  items: [],
  total_amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartStore;

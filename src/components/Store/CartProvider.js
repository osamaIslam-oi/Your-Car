import { useReducer } from "react";

import CartConxtext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }

  return defaultCartState;
};

const CarProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartConxtext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeitem: removeItemFromCartHandler,
  };

  return (
    <CartConxtext.Provider value={cartConxtext}>
      {props.children}
    </CartConxtext.Provider>
  );
};

export default CarProvider;

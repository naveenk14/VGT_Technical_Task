export const ecommerceReducer = (state, action) => {
  switch (action.type) {
    // add to cart and update to localstorage
    case "ADD_TO_CART":
      const item = state.products.find((p) => p.id === action.payload);
      const inCart = state.cart.find((i) => i.id === item.id);

      let updatedCart;
      if (inCart) {
        updatedCart = state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: 1 }];
      }

      // save to localstorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };

    //  remove from cart and update to localstorage
    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter((i) => i.id !== action.payload);

      // save updated cart to localstorage
      localStorage.setItem("cart", JSON.stringify(filteredCart));

      return {
        ...state,
        cart: filteredCart,
      };

    // increase quantity and updated to localstorage
    case "INCREASE_QUANTITY":
      const increasedCart = state.cart.map((i) =>
        i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
      );

      //  update localstorage
      localStorage.setItem("cart", JSON.stringify(increasedCart));

      return {
        ...state,
        cart: increasedCart,
      };

    // decrease quantity and update to localstorage
    case "DECREASE_QUANTITY":
      const decreasedCart = state.cart
        .map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);

      // update localstorage
      localStorage.setItem("cart", JSON.stringify(decreasedCart));

      return {
        ...state,
        cart: decreasedCart,
      };

    // push cart to orders and clear cart
    case "PLACE_ORDER":
      const newOrder = {
        id: Date.now(),
        items: state.cart,
        total: action.payload,
        date: new Date().toLocaleString(),
      };

      const updatedOrders = [...state.orders, newOrder];

      // save orders to localstorage
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      localStorage.removeItem("cart");

      return {
        ...state,
        cart: [],
        orders: updatedOrders,
      };

    default:
      return state;
  }
};

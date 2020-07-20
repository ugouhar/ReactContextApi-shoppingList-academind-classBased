import React from "react";

export default React.createContext({
  products: [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 },
  ],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});

/**
 * 1. We can use this context in this file itself but it is
 *    better to export this file and use it in other files
 *
 * 2. State is actually not required in this file.
 *    We have written state in this file just for better
 *    order completion.
 */

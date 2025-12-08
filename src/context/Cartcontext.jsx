import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, tableNumber) => {
    setCart((prev) => {
      const exist = prev.find(
        (i) => i.id === item.id && i.tableNumber === tableNumber
      );
      if (exist) {
        return prev.map((i) =>
          i.id === item.id && i.tableNumber === tableNumber
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prev, { ...item, quantity: 1, tableNumber }];
      }
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

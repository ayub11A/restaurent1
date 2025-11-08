import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save orders in localStorage
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // 🛒 Add to cart
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // ✅ Confirm order
  const placeOrder = (customerName = "Guest") => {
    if (cartItems.length === 0) return;

    const newOrder = {
      id: Date.now(),
      customerName,
      items: cartItems,
      total: cartItems.reduce((sum, i) => sum + i.price, 0),
      status: "Pending",
      date: new Date().toISOString(),
    };

    setOrders((prev) => [...prev, newOrder]);
    setCartItems([]); // clear after order
  };

  // ✅ Update status
  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  // ✅ Remove single order
  const removeOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  // ✅ Clear all orders
  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        placeOrder,
        orders,
        updateOrderStatus,
        removeOrder,
        clearOrders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();
export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) setOrders(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const createOrder = (cartItems) => {
    if (!cartItems || cartItems.length === 0) return;
    const total = cartItems.reduce((sum, i) => sum + i.price, 0);
    const newOrder = {
      id: Date.now(),
      customerName: "Anonymous",
      items: [...cartItems],
      total,
      status: "Pending",
      date: new Date().toISOString(),
      tableNumber: cartItems[0].tableNumber || "N/A",
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, setOrders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

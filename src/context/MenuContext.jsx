import React, { createContext, useContext, useState, useEffect } from "react";
import MenuItems from "../data/MenuItems";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setMenuItems(MenuItems);
  }, []);

  // Add to Cart
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find(
        (i) => i.id === item.id && i.tableNumber === item.tableNumber
      );
      if (exists) {
        return prev.map((i) =>
          i.id === item.id && i.tableNumber === item.tableNumber
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, item];
    });
  };

  // Hide / Unhide menu item
  const toggleAvailable = (id) => {
    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  // Delete menu item
  const deleteMenuItem = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Edit menu item
  const editMenuItem = (id, updatedItem) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        setMenuItems,
        cart,
        addToCart,
        toggleAvailable,
        deleteMenuItem,
        editMenuItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

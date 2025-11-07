import React, { createContext, useContext, useState } from "react";
import MenuItemsData from "../data/MenuItems";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(
    MenuItemsData.map((item) => ({ ...item, available: true }))
  );

  const toggleAvailable = (id) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, toggleAvailable }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

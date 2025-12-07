// src/context/MenuContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import ImportedMenuItems from "../data/MenuItems";

const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("menuItems"));
    if (saved && saved.length > 0) {
      setMenuItems(saved);
    } else {
      setMenuItems(ImportedMenuItems);
      localStorage.setItem("menuItems", JSON.stringify(ImportedMenuItems));
    }
  }, []);

  useEffect(() => {
    if (menuItems.length > 0) {
      localStorage.setItem("menuItems", JSON.stringify(menuItems));
    }
  }, [menuItems]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};

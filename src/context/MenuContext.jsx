import { createContext, useContext, useState, useEffect } from "react";
import MenuItemsData from "../data/MenuItems";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem("menuItems");
    if (saved) return JSON.parse(saved);
    // Default: all items available = true
    return MenuItemsData.map(item => ({ ...item, available: true }));
  });

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
  }, [menuItems]);

  const toggleAvailable = (id) => {
    setMenuItems(menuItems.map(item =>
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  const deleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, toggleAvailable, deleteMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
export default MenuContext;

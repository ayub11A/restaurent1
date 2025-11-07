// src/context/AdminContext.jsx
import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState([{ username: "admin", password: "1234" }]);
  const [isAdmin, setIsAdmin] = useState(false);

  const addAdmin = (username, password) => {
    setAdmins([...admins, { username, password }]);
  };

  const loginAdmin = (username, password) => {
    const found = admins.find(a => a.username === username && a.password === password);
    if (found) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ admins, addAdmin, loginAdmin, logoutAdmin, isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || null
  );
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("isAdmin")) || false
  );

  // ✅ Login function oo marka password sax yahay, isla markaas user-ka loo fasaxo
  const loginAdmin = ({ username, password }) => {
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));
    if (storedAdmin && username === storedAdmin.username && password === storedAdmin.password) {
      setIsAdmin(true);                   // User-ka waa admin hadda
      localStorage.setItem("isAdmin", true);
      return true;                        // ✅ Login guuleystay → AdminPage wuu arki karaa
    }
    setIsAdmin(false);
    return false;                         // Password ama username khalad
  };

  // Registration (signup)
  const registerAdmin = ({ username, password }) => {
    const newAdmin = { username, password };
    setAdmin(newAdmin);
    localStorage.setItem("admin", JSON.stringify(newAdmin));
    return true;
  };

  return (
    <AdminContext.Provider value={{ admin, isAdmin, loginAdmin, registerAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

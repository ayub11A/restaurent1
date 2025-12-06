import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  // array of admins
  const [admins, setAdmins] = useState(
    JSON.parse(localStorage.getItem("admins")) || []
  );
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(localStorage.getItem("currentAdmin")) || null
  );

  const loginAdmin = ({ username, password }) => {
    const foundAdmin = admins.find(
      (a) => a.username === username && a.password === password
    );
    if (foundAdmin) {
      setCurrentAdmin(foundAdmin);
      localStorage.setItem("currentAdmin", JSON.stringify(foundAdmin));
      return true;
    }
    return false;
  };

  const registerAdmin = ({ username, password }) => {
    const newAdmin = { id: Date.now(), username, password, role: "Admin" };
    setAdmins([...admins, newAdmin]);
    localStorage.setItem("admins", JSON.stringify([...admins, newAdmin]));
    return true;
  };

  const removeAdmin = (id) => {
    const filtered = admins.filter((a) => a.id !== id);
    setAdmins(filtered);
    localStorage.setItem("admins", JSON.stringify(filtered));
  };

  return (
    <AdminContext.Provider
      value={{
        admins,
        currentAdmin,
        loginAdmin,
        registerAdmin,
        removeAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

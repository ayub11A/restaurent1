import React, { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState([]);
  const [pendingAdmins, setPendingAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(localStorage.getItem("currentAdmin")) || null
  );

  useEffect(() => {
    const savedAdmins = JSON.parse(localStorage.getItem("admins")) || [];
    const savedPending = JSON.parse(localStorage.getItem("pendingAdmins")) || [];

    const superAdmin = {
      username: "Eng-mire",
      email: "mohamedamiin0488@gmail.com",
      password: "Eng-mire5029",
      status: "approved",
      id: 1
    };

    if (!savedAdmins.some(a => a.email === superAdmin.email)) {
      savedAdmins.push(superAdmin);
      localStorage.setItem("admins", JSON.stringify(savedAdmins));
    }

    setAdmins(savedAdmins);
    setPendingAdmins(savedPending);
  }, []);

  useEffect(() => {
    localStorage.setItem("admins", JSON.stringify(admins));
    localStorage.setItem("pendingAdmins", JSON.stringify(pendingAdmins));
  }, [admins, pendingAdmins]);

  useEffect(() => {
    if (currentAdmin) localStorage.setItem("currentAdmin", JSON.stringify(currentAdmin));
    else localStorage.removeItem("currentAdmin");
  }, [currentAdmin]);

  const registerAdmin = (admin) => {
    if ([...admins, ...pendingAdmins].some(a => a.username === admin.username || a.email === admin.email))
      return false;
    setPendingAdmins([...pendingAdmins, { ...admin, status: "pending", id: Date.now() }]);
    return true;
  };

  const approveAdmin = (email) => {
    const adminToApprove = pendingAdmins.find(a => a.email === email);
    if (!adminToApprove) return;
    setPendingAdmins(pendingAdmins.filter(a => a.email !== email));
    setAdmins([...admins, { ...adminToApprove, status: "approved" }]);
  };

  const loginAdmin = ({ username, email, password }) => {
    const approvedUser = admins.find(a => a.username === username && a.email === email);
    if (approvedUser) {
      if (approvedUser.password === password) {
        setCurrentAdmin(approvedUser);
        return "approved";
      }
      return "wrong-password";
    }

    if (pendingAdmins.find(a => a.username === username && a.email === email)) return "pending";

    return "not-found";
  };

  const logoutAdmin = () => setCurrentAdmin(null);

  return (
    <AdminContext.Provider
      value={{
        admins,
        pendingAdmins,
        currentAdmin,
        setCurrentAdmin,
        registerAdmin,
        approveAdmin,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

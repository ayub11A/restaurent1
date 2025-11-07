import React from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

function ProtectedRoute({ children }) {
  const { isAdmin } = useAdmin();
  if (!isAdmin) return <Navigate to="/adminLogin" replace />; // login ma jiro → dib ugu dir login
  return children; // login sax → adminPage u oggolow
}

export default ProtectedRoute;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin"; // 
import { useAdmin } from "../context/AdminContext";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { admin, registerAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (username === admin?.username) {
      registerAdmin({ username, password: newPassword });
      navigate("/adminLogin"); 
    }
  };

  return (
    <div>
      <AdminLogin /> {/* login form ka muuqdo */}
      <form onSubmit={handleReset}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;

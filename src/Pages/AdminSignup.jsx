import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin"; // Login component ka muuqdo
import { useAdmin } from "../context/AdminContext";

function AdminSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { registerAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerAdmin({ username, password });
    navigate("/adminLogin"); // ka dib signup → login page
  };

  return (
    <div>
      <AdminLogin /> {/* login form ka muuqdo */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignup;

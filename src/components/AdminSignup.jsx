import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAdmin } from "../context/AdminContext";

function AdminSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    registerAdmin({ username, email, password });
    setUsername(""); setEmail(""); setPassword("");
    navigate("/adminlogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Signup</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-3 rounded border border-gray-300" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded border border-gray-300" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3 rounded border border-gray-300" required />
          <button type="submit" className="bg-green-500 text-white py-3 rounded hover:bg-green-600">Signup</button>
        </form>
        <p className="mt-4 text-center text-sm">Hore u leedahay account? <Link to="/adminlogin" className="text-blue-500 hover:underline">Login</Link></p>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default AdminSignup;

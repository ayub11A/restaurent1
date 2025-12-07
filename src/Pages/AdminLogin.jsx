import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAdmin } from "../context/AdminContext";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = loginAdmin({ username, email, password });

    if (result === "approved") {
      toast.success("Login successful!");
      setTimeout(() => navigate("/admin"), 1200);
    } else if (result === "pending") toast.info("Account pending approval.");
    else if (result === "wrong-password") toast.error("Incorrect password!");
    else toast.error("Account not found!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-3 rounded border border-gray-300" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded border border-gray-300" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3 rounded border border-gray-300" required />
          <button type="submit" className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600">Login</button>
        </form>
        <p className="mt-4 text-center text-sm">No account? <Link to="/adminsignup" className="text-blue-500 hover:underline">Signup</Link></p>
      </div>
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
}

export default AdminLogin;

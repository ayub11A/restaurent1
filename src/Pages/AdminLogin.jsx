import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState(""); // For forgot password
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const { loginAdmin, registerAdmin, admin, isAdmin } = useAdmin();
  const navigate = useNavigate();

  // Haddii horey login ahaa → toos u geyn AdminPage
  useEffect(() => {
    if (isAdmin) navigate("/adminPage");
  }, [isAdmin, navigate]);

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    const success = loginAdmin({ username, password });
    if (success) {
      navigate("/adminPage");
    } else {
      setError("Username ama password waa khalad ❌");
    }
  };

  // Signup handler
  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Fadlan buuxi username iyo password");
      return;
    }
    registerAdmin({ username, password });
    setShowSignup(false);
    setError("✅ login samee");
  };

  // Forgot password handler
  const handleForgot = (e) => {
    e.preventDefault();
    if (username === admin?.username) {
      registerAdmin({ username, password: newPassword });
      setShowForgot(false);
      setError("Password waa la bedelay ✅ Hadda login samee");
      setNewPassword("");
    } else {
      setError("Username ma jiro ama khalad ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        {!showSignup && !showForgot && (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-2"
            >
              Login
            </button>
            <div className="flex justify-between text-sm">
              <button type="button" onClick={() => setShowSignup(true)} className="text-green-600 hover:underline">
                Sign Up
              </button>
              <button type="button" onClick={() => setShowForgot(true)} className="text-orange-600 hover:underline">
                Forgot Password
              </button>
            </div>
          </form>
        )}

        {showSignup && (
          <form onSubmit={handleSignup}>
            <h3 className="text-center mb-2 font-semibold">Sign Up</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 mb-2">
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => setShowSignup(false)}
              className="w-full text-center text-gray-600 hover:underline"
            >
              Back to Login
            </button>
          </form>
        )}

        {showForgot && (
          <form onSubmit={handleForgot}>
            <h3 className="text-center mb-2 font-semibold">Forgot Password</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <button type="submit" className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 mb-2">
              Reset Password
            </button>
            <button
              type="button"
              onClick={() => setShowForgot(false)}
              className="w-full text-center text-gray-600 hover:underline"
            >
              Back to Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;

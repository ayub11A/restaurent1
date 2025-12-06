import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const handleSignup = (e) => {
    e.preventDefault();

    const signupData = { username, email, password };
    console.log("Signup Info:", signupData);

    // After success → go to admin dashboard
    navigate("/admin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="bg-white p-12 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-green-700">
          Create Admin Account
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/adminlogin" className="text-green-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;

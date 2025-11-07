import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const { changePassword } = useAdmin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    if (!newPassword) {
      alert("Fadlan geli password cusub.");
      return;
    }
    changePassword(newPassword);
    navigate("/adminLogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
        <form onSubmit={handleChange}>
          <input
            type="password"
            placeholder="Password cusub"
            className="border w-full p-2 mb-4 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;

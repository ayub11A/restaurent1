import React, { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

function AdminLogin({ inline = false }) {
  // inline=true -> component is rendered inside AdminPage (no redirect)
  const { loginAdmin, changePassword, requestResetCode, verifyResetCode, _debugPassword } = useAdmin();
  const navigate = useNavigate();

  const [username, setUsername] = useState("admin");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  // change password state
  const [showChange, setShowChange] = useState(false);
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");

  // forgot password state
  const [showForgot, setShowForgot] = useState(false);
  const [resetSentInfo, setResetSentInfo] = useState(null);
  const [resetCodeInput, setResetCodeInput] = useState("");
  const [forgotNewPass, setForgotNewPass] = useState("");

  const handleLogin = (e) => {
    e?.preventDefault();
    const res = loginAdmin({ username, pass });
    if (res.ok) {
      setMessage("Login successful");
      // redirect to adminPage unless inline mode
      if (!inline) navigate("/adminPage");
    } else {
      setMessage(res.error);
    }
  };

  const handleChangePassword = (e) => {
    e?.preventDefault();
    const res = changePassword({ current, newPass });
    if (res.ok) {
      setMessage("Password changed successfully");
      setShowChange(false);
      setCurrent("");
      setNewPass("");
    } else {
      setMessage(res.error);
    }
  };

  const handleRequestReset = () => {
    const res = requestResetCode();
    if (res.ok) {
      // For demo we show the code — in real app send via email/SMS
      setResetSentInfo({ code: res.code, expiresAt: res.expiresAt });
      setMessage(`Reset code generated (demo): ${res.code}`);
      setShowForgot(true);
    } else {
      setMessage("Could not generate reset code");
    }
  };

  const handleVerifyReset = (e) => {
    e?.preventDefault();
    const res = verifyResetCode({ code: resetCodeInput, newPass: forgotNewPass });
    if (res.ok) {
      setMessage("Password reset successful. You can now log in.");
      setShowForgot(false);
      setResetCodeInput("");
      setForgotNewPass("");
    } else {
      setMessage(res.error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>

      <form onSubmit={handleLogin} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-2 py-1 w-full rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="border px-2 py-1 w-full rounded"
          />
        </div>

        <div className="flex items-center gap-2">
          <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
            Login
          </button>

          <button
            type="button"
            onClick={() => { setShowChange((s) => !s); setMessage(""); }}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Change Password
          </button>

          <button
            type="button"
            onClick={() => { handleRequestReset(); }}
            className="bg-yellow-500 px-3 py-1 rounded text-white"
          >
            Forgot Password
          </button>
        </div>
      </form>

      {/* Change Password UI */}
      {showChange && (
        <form onSubmit={handleChangePassword} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm">Current Password</label>
            <input
              type="password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="border px-2 py-1 w-full rounded"
            />
          </div>
          <div>
            <label className="block text-sm">New Password</label>
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="border px-2 py-1 w-full rounded"
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-600 px-3 py-1 text-white rounded">
              Save New Password
            </button>
          </div>
        </form>
      )}

      {/* Forgot Password: show code input + new password */}
      {showForgot && (
        <form onSubmit={handleVerifyReset} className="mt-4 space-y-3">
          <p className="text-sm text-gray-600">
            Enter the 6-digit reset code (demo) and set a new password. Code shown here only for testing.
          </p>

          <div>
            <label className="block text-sm">Reset Code</label>
            <input
              value={resetCodeInput}
              onChange={(e) => setResetCodeInput(e.target.value)}
              className="border px-2 py-1 w-full rounded"
            />
          </div>

          <div>
            <label className="block text-sm">New Password</label>
            <input
              type="password"
              value={forgotNewPass}
              onChange={(e) => setForgotNewPass(e.target.value)}
              className="border px-2 py-1 w-full rounded"
            />
          </div>

          <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 px-3 py-1 text-white rounded">
              Reset Password
            </button>
            <button
              type="button"
              onClick={() => { setShowForgot(false); setResetCodeInput(""); setForgotNewPass(""); }}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Messages */}
      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}

      {/* DEBUG: show generated code for demo */}
      <div className="mt-4 text-xs text-gray-500">
        <div>Note: demo shows reset code directly. In production send by email/SMS.</div>
        <div className="mt-2">Debug password (for testing): <code>{_debugPassword}</code></div>
      </div>
    </div>
  );
}

export default AdminLogin;

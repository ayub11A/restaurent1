import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaHamburger, FaUsers, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import { useAdmin } from "../context/AdminContext";

function AdminLayout() {
  const { logoutAdmin } = useAdmin();

  const handleLogout = () => {
    logoutAdmin();
    window.location.href = "/adminlogin";
  };

  return (
    <div className="mt-12 min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-gray-700 text-white p-6 space-y-6">
        <h2 className="text-2xl pt-20 font-bold text-center">Admin Panel</h2>
        <nav className="flex flex-col gap-4 mt-10">
          <Link to="/admin" className="flex items-center gap-3 hover:text-green-300"><FaHome /> Dashboard</Link>
          <Link to="/admin/admins" className="flex items-center gap-3 hover:text-green-300 pt-10"><FaUsers /> Manage Admins</Link>
          <Link to="/admin/orders" className="flex items-center gap-3 hover:text-green-300 pt-20"><FaShoppingBag /> Orders</Link>
          <button onClick={handleLogout} className="flex items-center gap-3 text-red-300 hover:text-red-500 pt-20  mt-6"><FaSignOutAlt /> Logout</button>
        </nav>
      </aside>
      <main className="flex-1 p-10 "><Outlet /></main>
    </div>
  );
}

export default AdminLayout;

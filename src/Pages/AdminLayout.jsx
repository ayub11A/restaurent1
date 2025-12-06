import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaHamburger, FaUsers, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";

function AdminLayout() {
  return (
    <div className=" mt-12 min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-700 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">Admin Panel</h2>

        <nav className="flex flex-col gap-4 mt-10">
          <Link to="/admin" className="flex items-center gap-3 hover:text-yellow-300">
            <FaHome /> Dashboard
          </Link>

          <Link to="/admin/menu" className="flex items-center gap-3 hover:text-yellow-300">
            <FaHamburger /> Manage Menu
          </Link>

          <Link to="/admin/admins" className="flex items-center gap-3 hover:text-yellow-300">
            <FaUsers /> Manage Admins
          </Link>

          <Link to="/admin/orders" className="flex items-center gap-3 hover:text-yellow-300">
            <FaShoppingBag /> Orders
          </Link>

         <button
  onClick={() => {
    // 1. Clear localStorage/sessionStorage
    localStorage.removeItem("adminToken"); // haddii token kaydsan yahay
    // 2. Redirect user to login page
    window.location.href = "/";
  }}
  className="flex items-center gap-3 text-red-300 hover:text-red-500"
>
  <FaSignOutAlt /> Logout
</button>

        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;

import React from "react";
import { useAdmin } from "../context/AdminContext";
import { Link } from "react-router-dom";
import MenuItems from "../data/MenuItems";
function AdminPage() {
  const { admin } = useAdmin();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">
          welcome {admin?.username} 🎉
        </h1>
        <p className="text-gray-700 mb-6">
          kuraaxeyso adminkaaga.
        </p>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-3">
          <Link to="/AdminDashboard">
            <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
              View Menu
            </button>
          </Link>
          <Link to="/review">
            <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Reviews
            </button>
          </Link>
          <Link to="/contact">
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Contact Page
            </button>
          </Link>
          <Link to="/blog">
            <button className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
              Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

import React, { useState, useEffect } from "react";

function ManageAdmins() {
const [admins, setAdmins] = useState([]);

// Load admins from localStorage once at component mount
useEffect(() => {
const saved = JSON.parse(localStorage.getItem("admins")) || [];
setAdmins(saved);
}, []);

const saveToStorage = (data) => {
localStorage.setItem("admins", JSON.stringify(data));
setAdmins(data);
};

const handleApprove = (id) => {
const updated = admins.map((a) =>
a.id === id ? { ...a, status: "approved" } : a
);
saveToStorage(updated);
};

const handleReject = (id) => {
if (window.confirm("Ma hubtaa inaad diidayso/tirtirayso admin-kan?")) {
const updated = admins.filter((a) => a.id !== id);
saveToStorage(updated);
}
};

const handleDelete = (id) => {
if (window.confirm("Ma hubtaa inaad tirtirayso admin-kan?")) {
const updated = admins.filter((a) => a.id !== id);
saveToStorage(updated);
}
};

const handleEdit = (admin) => {
const newName = prompt("Edit Name:", admin.name);
const newEmail = prompt("Edit Email:", admin.email);
if (newName?.trim() && newEmail?.trim()) {
const updated = admins.map((a) =>
a.id === admin.id
? { ...a, name: newName.trim(), email: newEmail.trim() }
: a
);
saveToStorage(updated);
} else {
alert("Fadlan buuxi fields-ka.");
}
};

const handleAddAdmin = () => {
if (admins.length >= 10) {
alert("Waxaa jiri kara ugu badnaan 10 admins.");
return;
}
const name = prompt("Name:");
const email = prompt("Email:");
if (!name?.trim() || !email?.trim()) {
alert("Fadlan buuxi fields-ka.");
return;
}


const newAdmin = {
  id: Date.now(),
  name: name.trim(),
  email: email.trim(),
  status: "approved", // isla markiiba approved
};

// Keydi liiska cusub ee admins
const updatedAdmins = [...admins, newAdmin];
saveToStorage(updatedAdmins);


};

return ( <div className="p-6"> <h1 className="text-2xl font-bold mb-6 text-center">Manage Admins</h1>


  <div className="mb-6 text-center">
    <button
      onClick={handleAddAdmin}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Add Admin
    </button>
  </div>

  {/* Pending Admins */}
  <h2 className="text-xl font-semibold mb-2">Pending Admin Requests</h2>
  <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-10">
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {admins.filter((a) => a.status === "pending").length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center py-3 text-gray-500">
              No pending requests
            </td>
          </tr>
        ) : (
          admins
            .filter((a) => a.status === "pending")
            .map((admin, index) => (
              <tr key={admin.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{admin.name}</td>
                <td className="px-4 py-2">{admin.email}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleApprove(admin.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(admin.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
        )}
      </tbody>
    </table>
  </div>

  {/* Approved Admins */}
  <h2 className="text-xl font-semibold mb-2">Approved Admins</h2>
  <div className="overflow-x-auto bg-white rounded-lg shadow-md">
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {admins.filter((a) => a.status === "approved").length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center py-3 text-gray-500">
              No approved admins
            </td>
          </tr>
        ) : (
          admins
            .filter((a) => a.status === "approved")
            .map((admin, index) => (
              <tr key={admin.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{admin.name}</td>
                <td className="px-4 py-2">{admin.email}</td>
                <td className="px-4 py-2 flex gap-2 flex-wrap">
                  <button
                    onClick={() => handleEdit(admin)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
        )}
      </tbody>
    </table>
  </div>
</div>


);
}

export default ManageAdmins;

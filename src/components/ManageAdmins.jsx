import React, { useState } from "react";

function ManageAdmins() {
// Dummy admins data
const [admins, setAdmins] = useState([
{ id: 1, name: "Admin1", email: "[admin1@example.com](mailto:admin1@example.com)" },
{ id: 2, name: "Admin2", email: "[admin2@example.com](mailto:admin2@example.com)" },
{ id: 3, name: "Admin3", email: "[admin3@example.com](mailto:admin3@example.com)" },
]);

const handleDelete = (id) => {
if (window.confirm("Ma hubtaa inaad tirtirayso admin-kan?")) {
setAdmins(admins.filter((admin) => admin.id !== id));
}
};

const handleEdit = (admin) => {
const newName = prompt("Edit Name:", admin.name);
const newEmail = prompt("Edit Email:", admin.email);
if (newName?.trim() && newEmail?.trim()) {
setAdmins(
admins.map((a) =>
a.id === admin.id ? { ...a, name: newName.trim(), email: newEmail.trim() } : a
)
);
} else {
alert("Fadlan buuxi dhammaan fields-ka si sax ah.");
}
};

const handleAddAdmin = () => {
const name = prompt("Name of new admin:");
const email = prompt("Email of new admin:");
if (name?.trim() && email?.trim()) {
const newAdmin = {
id: admins.length ? admins[admins.length - 1].id + 1 : 1,
name: name.trim(),
email: email.trim(),
};
setAdmins([...admins, newAdmin]);
} else {
alert("Fadlan buuxi dhammaan fields-ka si sax ah.");
}
};

return ( <div className="p-6"> <h1 className="text-2xl font-bold mb-4 text-center">Manage Admins</h1>


  <div className="flex justify-end mb-3">
    <button
      onClick={handleAddAdmin}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Add Admin
    </button>
  </div>

  <div className="overflow-x-auto bg-white rounded-lg shadow-md">
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-2 text-left">#</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((admin, index) => (
          <tr key={admin.id} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{admin.name}</td>
            <td className="px-4 py-2 break-words">{admin.email}</td>
            <td className="px-4 py-2 flex gap-2 flex-wrap">
              <button
                onClick={() => handleEdit(admin)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(admin.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

);
}

export default ManageAdmins;

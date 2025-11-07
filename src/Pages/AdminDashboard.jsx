import React from "react";
import { useMenu } from "../context/MenuContext";

function AdminDashboard() {
  const { menuItems, toggleAvailable, setMenuItems } = useMenu();

  const handleEditMenu = (id) => {
    const item = menuItems.find((i) => i.id === id);
    const newName = prompt("Edit Name:", item.name);
    const newPrice = parseFloat(prompt("Edit Price:", item.price));
    const newDesc = prompt("Edit Description:", item.description);

    if (newName && !isNaN(newPrice) && newDesc) {
      setMenuItems(
        menuItems.map((i) =>
          i.id === id
            ? { ...i, name: newName, price: newPrice, description: newDesc }
            : i
        )
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white shadow-lg p-4 rounded transition hover:shadow-xl ${
              !item.available && "opacity-50"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover mb-3 rounded"
            />
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
            <p className="text-gray-500 mb-2">{item.description}</p>

            <div className="flex gap-2">
              {/* ✅ Edit Button */}
              <button
                onClick={() => handleEditMenu(item.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>

              {/* ✅ Hide/Unhide Button */}
              <button
                onClick={() => toggleAvailable(item.id)}
                className={`px-3 py-1 rounded text-white ${
                  item.available ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {item.available ? "Hide" : "Unhide"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;

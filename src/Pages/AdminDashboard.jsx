import React from "react";
import { useMenu } from "../context/MenuContext";
import { useCart } from "../context/Cartcontext";

function AdminDashboard() {
  const { menuItems, toggleAvailable, setMenuItems, deleteMenuItem } = useMenu();
  const { orders, removeOrder, clearOrders, updateOrderStatus } = useCart();

  const handleEditMenu = (id) => {
    const item = menuItems.find((i) => i.id === id);
    const newName = prompt("Edit Name:", item.name);
    const newPrice = parseFloat(prompt("Edit Price:", item.price));
    const newDesc = prompt("Edit Description:", item.description);
    if (newName && !isNaN(newPrice) && newDesc) {
      setMenuItems(
        menuItems.map(i =>
          i.id === id ? { ...i, name: newName, price: newPrice, description: newDesc } : i
        )
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Admin Dashboard</h1>

      {/* Menu Management */}
      <h2 className="text-xl font-semibold mb-2">Menu Management</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {menuItems.map(item => (
          <div key={item.id} className={`bg-white shadow-lg p-4 rounded ${!item.available ? "opacity-50" : ""}`}>
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover mb-3 rounded" />
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
            <p className="text-gray-500 mb-2">{item.description}</p>
            <div className="flex gap-2">
              <button onClick={() => handleEditMenu(item.id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
              <button onClick={() => toggleAvailable(item.id)} className={`px-3 py-1 rounded text-white ${item.available ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}>
                {item.available ? "hide" : "unhide"}
              </button>
              <button onClick={() => deleteMenuItem(item.id)} className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Tracking */}
      <h2 className="text-xl font-semibold mb-4">Customer Orders</h2>

      {orders.length > 0 ? (
        <>
          {/* Clear All Orders Button */}
          <div className="flex justify-end mb-3">
            <button
              onClick={clearOrders}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
               Clear All Orders
            </button>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Items (Table #)</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Date & Time</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{order.customerName}</td>
                    <td className="px-4 py-2">
                      {order.items.map(i => `${i.name} (Table ${i.tableNumber})`).join(", ")}
                    </td>
                    <td className="px-4 py-2">${order.total.toFixed(2)}</td>
                    <td className="px-4 py-2">{new Date(order.date).toLocaleString()}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-sm ${order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex flex-col gap-2">
                      {order.status !== "Delivered" && (
                        <button
                          onClick={() => updateOrderStatus(order.id, "Delivered")}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        >
                          Mark Delivered
                        </button>
                      )}
                      <button
                        onClick={() => removeOrder(order.id)}
                        className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800"
                      >
                         Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">No orders available yet.</p>
      )}
    </div>
  );
}

export default AdminDashboard;

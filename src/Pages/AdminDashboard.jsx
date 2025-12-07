import React from "react";
import { useMenu } from "../context/MenuContext";
import { useOrder } from "../context/OrderContext";

function AdminDashboard() {
  const { menuItems, setMenuItems } = useMenu();
  const { orders, setOrders } = useOrder();

  // --- Edit menu item and sync orders ---
  const editMenuItem = (id) => {
    const item = menuItems.find((i) => i.id === id);
    if (!item) return;

    const name = prompt("Enter new name:", item.name);
    const price = prompt("Enter new price:", item.price);
    const description = prompt("Enter new description:", item.description);

    if (!name || !price || !description) return;

    const updatedMenu = menuItems.map((i) =>
      i.id === id ? { ...i, name, price: parseFloat(price), description } : i
    );
    setMenuItems(updatedMenu);

    // Sync changes in orders
    const updatedOrders = orders.map((order) => ({
      ...order,
      items: order.items.map((i) =>
        i.id === id ? { ...i, name, price: parseFloat(price) } : i
      ),
      total: order.items.reduce(
        (sum, i) => (i.id === id ? sum + parseFloat(price) : sum + i.price),
        0
      ),
    }));
    setOrders(updatedOrders);
  };

  // --- Toggle availability ---
  const toggleAvailability = (id) => {
    setMenuItems(
      menuItems.map((i) =>
        i.id === id ? { ...i, available: !i.available } : i
      )
    );
  };

  // --- Delete menu item and remove from orders ---
  const deleteMenuItem = (id) => {
    if (!window.confirm("Delete this menu item?")) return;

    setMenuItems(menuItems.filter((i) => i.id !== id));

    const updatedOrders = orders.map((order) => {
      const newItems = order.items.filter((i) => i.id !== id);
      return {
        ...order,
        items: newItems,
        total: newItems.reduce((sum, i) => sum + i.price, 0),
      };
    });

    setOrders(updatedOrders);
  };

  // --- Change order status ---
  const changeOrderStatus = (orderId, status) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  // --- Remove order ---
  const removeOrder = (orderId) => {
    if (!window.confirm("Delete this order?")) return;
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* MENU ITEMS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Menu Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded mb-3" />
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-600 mb-1">{item.description}</p>
              <p className="font-semibold mb-1">${item.price.toFixed(2)}</p>
              <p className={item.available ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                {item.available ? "Available" : "Hidden"}
              </p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => editMenuItem(item.id)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">Edit</button>
                <button onClick={() => toggleAvailability(item.id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  {item.available ? "Hide" : "Show"}
                </button>
                <button onClick={() => deleteMenuItem(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORDERS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="bg-white border rounded-lg shadow p-4 mb-4 hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-lg">Table: {order.tableNumber || "N/A"}</p>
                <p className="font-bold text-lg">Total: ${order.total.toFixed(2)}</p>
              </div>
              <p className={`font-medium ${order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>Status: {order.status}</p>

              <ul className="mt-2 mb-3 list-disc list-inside">
                {order.items.map((i, idx) => (
                  <li key={idx} className="text-gray-700">
                    {i.name} – ${i.price.toFixed(2)}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                {order.status !== "Delivered" && (
                  <button
                    onClick={() => changeOrderStatus(order.id, "Delivered")}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    Mark as Delivered
                  </button>
                )}
                {order.status !== "Pending" && (
                  <button
                    onClick={() => changeOrderStatus(order.id, "Pending")}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Mark as Pending
                  </button>
                )}
                <button
                  onClick={() => removeOrder(order.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove Order
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;

import React, { useState, useEffect } from "react";

function Orders() {
const [orders, setOrders] = useState([]);
const [menuItems, setMenuItems] = useState([
"Pizza",
"Burger",
"Pasta",
"Salad",
"Sushi",
]);

const [newOrder, setNewOrder] = useState({ customer: "", item: menuItems[0] });

useEffect(() => {
const initialOrders = [
{ id: 1, customer: "Mohamed", item: "Pizza", status: "Pending" },
{ id: 2, customer: "Amina", item: "Burger", status: "Completed" },
];
setOrders(initialOrders);
}, []);

const handleAddOrder = () => {
if (!newOrder.customer.trim()) {
alert("Fadlan geli magaca macmiilka");
return;
}
const order = {
id: orders.length ? orders[orders.length - 1].id + 1 : 1,
customer: newOrder.customer.trim(),
item: newOrder.item,
status: "Pending",
};
setOrders([...orders, order]);
setNewOrder({ customer: "", item: menuItems[0] });
};

const handleStatusChange = (id, newStatus) => {
setOrders(
orders.map((order) =>
order.id === id ? { ...order, status: newStatus } : order
)
);
};

const handleRemoveOrder = (id) => {
if (window.confirm("Ma hubtaa inaad tirtirayso order-kan?")) {
setOrders(orders.filter((order) => order.id !== id));
}
};

return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Orders</h1>

```
  {/* Add new order */}
  <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Customer Name"
      value={newOrder.customer}
      onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
      className="border px-2 py-1 rounded"
    />
    <select
      value={newOrder.item}
      onChange={(e) => setNewOrder({ ...newOrder, item: e.target.value })}
      className="border px-2 py-1 rounded"
    >
      {menuItems.map((menuItem) => (
        <option key={menuItem} value={menuItem}>
          {menuItem}
        </option>
      ))}
    </select>
    <button
      onClick={handleAddOrder}
      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
    >
      Add Order
    </button>
  </div>

  {/* Orders table */}
  <table className="min-w-full border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="p-2 border">ID</th>
        <th className="p-2 border">Customer</th>
        <th className="p-2 border">Item</th>
        <th className="p-2 border">Status</th>
        <th className="p-2 border">Change Status</th>
        <th className="p-2 border">Remove</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.id} className="text-center">
          <td className="p-2 border">{order.id}</td>
          <td className="p-2 border">{order.customer}</td>
          <td className="p-2 border">{order.item}</td>
          <td className="p-2 border">{order.status}</td>
          <td className="p-2 border">
            <select
              value={order.status}
              onChange={(e) => handleStatusChange(order.id, e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </td>
          <td className="p-2 border">
            <button
              onClick={() => handleRemoveOrder(order.id)}
              className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


);
}

export default Orders;

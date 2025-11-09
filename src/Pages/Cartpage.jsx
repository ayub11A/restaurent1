import React, { useState } from "react";
import { useCart } from "../context/Cartcontext";

function Cartpage() {
  const { cartItems, placeOrder } = useCart();
  const [message, setMessage] = useState("");

  // ✅ Xisaabi total
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    placeOrder();
    setMessage("✅ Your order has been sent, please wait...");
    setTimeout(() => setMessage(""), 7000); 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          🛒 Your Cart
        </h1>

        {message && (
          <div className="mb-4 text-center text-green-600 font-semibold">
            {message}
          </div>
        )}

        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">
                        Table: {item.tableNumber || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Total + Confirm Order */}
            <div className="mt-8 flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Total: ${total.toFixed(2)}
              </h2>
              <button
                onClick={handleOrder}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                ✅ Confirm Order
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center text-lg"> cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cartpage;

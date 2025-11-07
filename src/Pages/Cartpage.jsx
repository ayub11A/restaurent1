import React from "react";
import { useCart } from "../context/Cartcontext";

function Cartpage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  {/* ✅ Table Number */}
                  {item.tableNumber && (
                    <p className="text-sm text-green-600 font-medium">
                      Table Number: {item.tableNumber}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cartpage;

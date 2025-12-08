import React from "react";
import { useCart } from "../context/Cartcontext";
import { useOrder } from "../context/OrderContext";

function CartPage() {
  const { cart, clearCart } = useCart();
  const cartItems = cart || [];
  const { createOrder } = useOrder();

  const total = cartItems.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0);

  const handleOrder = () => {
    if (cartItems.length === 0) return;

    createOrder(cartItems); // Dalabka wuxuu tagayaa OrderContext
    clearCart();            // Cart waa la nadiifiyaa
  };

  return (
    <div className="min-h-screen py-10 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border p-4 rounded-lg hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">
                        Table: {item.tableNumber}
                      </p>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2">
                Total: ${total.toFixed(2)}
              </h2>
              <button
                onClick={handleOrder}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                ✅ Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;

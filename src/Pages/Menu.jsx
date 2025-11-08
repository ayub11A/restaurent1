import React, { useState } from "react";
import { useCart } from "../context/Cartcontext";
import { useMenu } from "../context/MenuContext";
import { useSearch } from "../context/SearchContext";

function Menu() {
  const { addToCart } = useCart();
  const { menuItems } = useMenu();
  const { searchTerm } = useSearch();
  const [tableNumber, setTableNumber] = useState("");
  const [showTableInput, setShowTableInput] = useState(false);
  const [toast, setToast] = useState("");

  const handleAddToCart = (item) => {
    if (!tableNumber) {
      setToast("⚠️ fadlan gali lambarka miiskaaga inta aadan dalban.");
      setShowTableInput(true);
      setTimeout(() => setToast(""), 5000);
      return;
    }

    addToCart({ ...item, quantity: 1, tableNumber });

    setToast(`✅ ${item.name} added to cart. Please confirm your order at Cart 🛒.`);
    setTimeout(() => setToast(""), 5000);
  };

  const filteredItems = menuItems.filter(
    (item) =>
      item.available &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 relative">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 
                        bg-gray-800 text-white font-medium px-4 py-2 rounded-lg shadow-lg 
                        z-[9999] animate-toast text-center max-w-xs  w-[90%] ml-40 mt-30">
          {toast}
        </div>
      )}

      {/* Table Input Modal */}
      {showTableInput && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9998] p-4">
          <div className="bg-white border shadow-xl p-5 rounded-lg w-full max-w-sm">
            <p className="mb-3 font-semibold text-center text-gray-700">
              fadlan gali lambarka miiskaaga:
            </p>
            <div className="flex justify-center items-center gap-2">
              <input
                type="number"
                min="1"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="border rounded px-3 py-2 w-full text-center"
                placeholder="e.g. 5"
              />
              <button
                onClick={() => setShowTableInput(false)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg p-4 rounded transition hover:shadow-xl flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover mb-3 rounded"
            />
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-green-600 text-white py-2 px-3 mt-auto rounded hover:bg-green-700 w-full text-center"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Toast Animation */}
      <style>{`
        @keyframes toastSlide {
          0% { transform: translate(-50%, -60%); opacity: 0; }
          50% { transform: translate(-50%, -55%); opacity: 1; }
          100% { transform: translate(-50%, -50%); opacity: 1; }
        }
        .animate-toast {
          animation: toastSlide 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Menu;

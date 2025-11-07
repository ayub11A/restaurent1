import React, { useState } from "react";
import { useCart } from "../context/Cartcontext";
import { useMenu } from "../context/MenuContext";
import { useSearch } from "../context/SearchContext"; // ✅ import search context

function Menu() {
  const { addToCart } = useCart();
  const { menuItems } = useMenu();
  const { searchTerm } = useSearch(); // ✅ get searchTerm from context
  const [tableNumber, setTableNumber] = useState("");
  const [showTableInput, setShowTableInput] = useState(false);
  const [toast, setToast] = useState("");

  const handleAddToCart = (item) => {
    if (!tableNumber) {
      setToast("⚠️ fadlan gali lambarka miiskaaga inta aadan dalban.");
      setShowTableInput(true);
      setTimeout(() => setToast(""), 9000);
      return;
    }

    addToCart({ ...item, quantity: 1, tableNumber });
    alert(`${item.name} added to cart for Table ${tableNumber}!`);
  };

  // ✅ Combine both filters: available + search term
  const filteredItems = menuItems.filter(
    (item) =>
      item.available &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {toast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white font-medium px-6 py-2 rounded-lg shadow-lg z-[9999] animate-fade">
          {toast}
        </div>
      )}

      {showTableInput && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9998]">
          <div className="bg-white border shadow-xl p-5 rounded-lg">
            <p className="mb-3 font-semibold text-center text-gray-700">
              fadlan gali lambarka miiskaaga:
            </p>
            <div className="flex justify-center items-center">
              <input
                type="number"
                min="1"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="border rounded px-3 py-1 w-32 text-center"
                placeholder="e.g. 5"
              />
              <button
                onClick={() => setShowTableInput(false)}
                className="ml-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Show filtered items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg p-4 rounded transition hover:shadow-xl"
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
              className="bg-green-600 ml-10 text-white py-1 px-3 mt-3 rounded hover:bg-green-700 w-[300px] h-[40px]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

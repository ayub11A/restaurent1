import React, { useState, useEffect } from "react";
import { useCart } from "../context/Cartcontext";
import { useMenu } from "../context/MenuContext";

function Menu() {
  const { addToCart } = useCart();
  const { menuItems } = useMenu();

  const [tableNumber, setTableNumber] = useState("");
  const [showTableInput, setShowTableInput] = useState(false);
  const [toast, setToast] = useState("");
  const [cleanList, setCleanList] = useState([]);

  useEffect(() => {
    if (!menuItems) return;
    const availableItems = menuItems.filter(i => i.available !== false);
    setCleanList(availableItems);
  }, [menuItems]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  const handleAddToCart = (item) => {
    if (!tableNumber) {
      setShowTableInput(true);
      showToast("⚠️ Fadlan gali lambarka miiskaaga.");
      return;
    }
    addToCart({ ...item, quantity: 1, tableNumber });
    showToast(`✅ ${item.name} ayaa lagu daray cart-ka.`);
  };

  const handleConfirmTable = () => {
    if (!tableNumber || Number(tableNumber) <= 0) {
      showToast("⚠️ Miis sax ah geli.");
      return;
    }
    setShowTableInput(false);
  };

  return (
    <div className="p-4 md:p-6 mt-20 relative">
      {toast && <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white font-medium px-4 py-2 rounded-lg shadow-lg z-[9999]">{toast}</div>}

      {showTableInput && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9998] p-4">
          <div className="bg-white border shadow-xl p-5 rounded-lg w-full max-w-sm">
            <p className="mb-3 font-semibold text-center text-gray-700">Fadlan gali lambarka miiskaaga:</p>
            <div className="flex justify-center items-center gap-2">
              <input
                type="number"
                min="1"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="border rounded px-3 py-2 w-full text-center"
                placeholder="e.g. 5"
              />
              <button onClick={handleConfirmTable} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Confirm</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cleanList.map(item => (
          <div key={item.id} className="bg-gray-200 shadow-lg p-4 rounded transition hover:shadow-xl flex flex-col">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover mb-3 rounded" />
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(item)} className="bg-gray-600 text-white py-2 px-3 mt-auto rounded hover:bg-gray-500 w-full text-center">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

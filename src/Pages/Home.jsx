import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-gray-400 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center h-[80vh] flex flex-col items-center justify-center text-white">
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Ku Soo Dhawoow Kc Restaurant</h1>
          <p className="text-lg mb-6">Cunto dhadhan leh oo jacayl iyo xirfad lagu diyaariyey</p>
          <Link
            to="/menu"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Fiiri Menu-ga
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl bg-gray-300 border border-bg-red-500 mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://i.pinimg.com/736x/90/b8/e2/90b8e2092a439e79a8644dfcf56089ca.jpg"
          alt="Delicious Meal"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cusub & Dhadhan Leh Maalin Walba</h2>
          <p className="text-gray-600 mb-6">
            Kc Restaurant waxa aan kuu soo gudbinaynaa cunto cusub oo si maalinle ah u la kariyo,
            kuna diyaariyaan cunto-karis xirfad sare leh oo adeegsada agab tayo sare leh.
            Ku raaxayso isku-darka dhadhanka iyo dhaqanka.
          </p>
          <Link
            to="/about"
            className="bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-red-500 transition-all"
          >
            Wax Badan Ka Ogow
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;

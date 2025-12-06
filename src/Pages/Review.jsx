import React from "react";

const reviews = [
  {
    id: 1,
    name: "Aisha M.",
    comment:
      "Cuntadu aad bay u dhadhan fiicanayd, adeegguna wuu ka sii wanaagsanaa! Si weyn baan ugu talinayaa Kc Restaurant.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    id: 2,
    name: "Mohamed A.",
    comment:
      "Jawigu aad buu u qurux badan yahay, cuntoyaduna waa mid cusub oo tayo leh. Dabcan mar kale waan soo laabanayaa.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Layla H.",
    comment:
      "Wax walba waa ay ku habboonaayeen — laga bilaabo appetizers ilaa macmacaanka. 5 xiddig!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

function Review() {
  return (
    <section className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mt-20  mb-10">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Faallooyinka Macaamiisha</h2>
        <p className="text-gray-600">Waa kuwan dadka nagu soo booqda ay ka sheegayaan</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={rev.image}
                alt={rev.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-2">{rev.name}</h3>
              <p className="text-gray-600 mb-3 italic">"{rev.comment}"</p>
              <div className="text-yellow-400">
                {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;

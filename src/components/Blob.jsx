import React from "react";
import { Link } from "react-router-dom";

const BlobPosts = [
  {
    id: 1,
    title: "Farsamada Shiilista",
    content:
      "Baro siraha lagu sameeyo cunto si qumman u shiilan — digaag, hilib, iyo steak. Talooyin iyo farsamooyin muhiim ah.",
    image: "https://i.pinimg.com/736x/34/04/56/340456ebc755340dd38f10ca8406f0f3.jpg",
  },
  {
    id: 2,
    title: "Talooyin Cunto Caafimaad Leh",
    content:
      "Baro sida aad isku dheelitirto dhadhanka iyo caafimaadka. Bedel fudud oo kaa caawinaya nolol caafimaad leh.",
    image: "https://i.pinimg.com/736x/34/78/8f/34788fd14dfdc5cefea3497c8e9c55ae.jpg",
  },
  {
    id: 3,
    title: "Fikrado Macmacaanka",
    content:
      "Kac cunistaada macmacaanka adigoo isticmaalaya fikrado cusub oo fudud oo macaan lagu sameeyo guriga.",
    image: "https://i.pinimg.com/736x/03/31/22/0331225be7591193ab3ffc43e43155bb.jpg",
  },
];

function Blob() {
  return (
    <section className="bg-gray-100 min-h-screen py-16 mt-10 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Blog-geena</h2>
        <p className="text-gray-600 text-lg">
          Talooyin, cuntooyin iyo fikrado kaa caawinaya inaad u cuntaysato si ka sii wanaagsan.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlobPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">{post.content}</p>

              <Link to="/menu">
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Booqo menuga
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blob;

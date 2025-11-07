import React from "react";
import { Link } from "react-router-dom";

const BlobPosts = [
  {
    id: 1,
    title: "The Art of Grilling",
    content:
      "Discover the secrets to perfectly grilled dishes, from chicken to steak. Tips, techniques, and recipes.",
    image: "https://i.pinimg.com/736x/34/04/56/340456ebc755340dd38f10ca8406f0f3.jpg",
  },
  {
    id: 2,
    title: "Healthy Eating Tips",
    content:
      "Learn how to balance taste and nutrition in your daily meals. Easy swaps for a healthier lifestyle.",
    image: "https://i.pinimg.com/736x/34/78/8f/34788fd14dfdc5cefea3497c8e9c55ae.jpg",
  },
  {
    id: 3,
    title: "Dessert Ideas",
    content:
      "Indulge your sweet tooth with these creative dessert recipes that are easy to make at home.",
    image: "https://i.pinimg.com/736x/03/31/22/0331225be7591193ab3ffc43e43155bb.jpg",
  },
];

function Blob() { // Waa magaca component-ka saxda ah
  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Blog</h2>
        <p className="text-gray-600 text-lg">
          Tips, recipes, and ideas to make your dining experience memorable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlobPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.content}</p>
             <Link to="/menu"> <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Read More
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blob;

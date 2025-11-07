import React from "react";

function About() {
  return (
    <section className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg">
         <span className="text-green-400 font-bold"> Kc Restaurant</span> is more than just a place to eat — it’s a place where flavor meets passion.
          Since our founding, we’ve been serving fresh, delicious, and memorable dishes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
          alt="Our Chef"
          className="rounded-2xl shadow-xl"
        />
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-3 text-green-500">Our Story</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2022, Kc Restaurant started as a small kitchen with a dream — to create food that connects people. 
            Our chefs put love into every meal, ensuring a memorable dining experience every time.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe great food brings great memories. Whether it's a family dinner or a romantic night out, 
            Kc Restaurant is your home for taste and comfort.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

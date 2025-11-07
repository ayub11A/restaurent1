import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "252619355029"; // WhatsApp number-ka

  const handleSend = (e) => {
    e.preventDefault();
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Contact Form */}
        <form className="bg-white shadow-lg p-8 rounded-2xl space-y-5" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-800"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-800"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Map or Info */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-3 text-green-500">Visit Us</h3>
          <p className="text-gray-600 mb-2">📍 Hodan District, Mogadishu, Somalia</p>
          <p className="text-gray-600 mb-2">📞 +252 619355029</p>
          <p className="text-gray-600 mb-6">📧 info@kcrestaurant.com</p>
          <iframe
            title="Kc Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.029264753899!2d45.31816157573855!3d2.041134697893944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58424caaa1b6a7%3A0x5e5d91764b04b9b6!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sso!4v1698660012345!5m2!1sen!2sso"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl border-none shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

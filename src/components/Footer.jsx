import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand */}
        <div>
                  <div className="flex items-center gap-2">
                    <img src="https://i.pinimg.com/736x/df/83/f5/df83f585029b7996c15640a3396ef122.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-green-500 text-2xl font-extrabold hidden sm:block">
                      Restaurant
                    </h1>
                  </div>
          <p className="text-sm leading-6">
            Experience delicious meals crafted with passion and fresh ingredients.  
            Taste the difference in every bite!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/menu" className="hover:text-green-400">Menu</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Opening Hours</h3>
          <ul className="space-y-2">
            <li>sat - Fri: 8:00 AM - 11:00 PM</li>
           
          
          </ul>
        </div>

        {/* Column 4: Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-sm mb-3">📍 Hodan District, Mogadishu, Somalia</p>
          <p className="text-sm mb-4">📞 +252 619355029</p>

            <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/qaalidi.haweenka" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
            <a href="https://wa.me/252619355029" className="hover:text-green-400 transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kc Restaurant. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

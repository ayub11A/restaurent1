import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/KcL.ogo.jpg";
function Footer() {
  return (
    <footer className=" -mt-20 bg-gray-700 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 rounded-[10px]"
            />
          
                   <h1 className="text-green-500 text-2xl "> <span className="text-white"> <span className="text-amber-300">K</span><span className="text-red-300">c</span></span><br /> <span className="text-red-600">chicken</span><span className="text-black">&</span ><span className="text-amber-300">chips</span> </h1>

          </div>

          <p className="text-sm leading-6 mt-10">
            Ku raaxayso cuntooyin macaan oo si xirfad leh loo diyaariyey,
            kuna sameysan agab cusub.  
            Dhadhan kasta waxaad ka dareemi doontaa kala duwanaansho!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Links Degdeg ah</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/menu" className="hover:text-green-400">Menu</Link></li>
            <li><Link to="/about" className="hover:text-green-400">Nagu Saabsan</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Nala Soo Xiriir</Link></li>
          </ul>
        </div>

        {/* Column 3: Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Saacadaha Furmitaanka</h3>
          <ul className="space-y-2">
            <li>Sabti - Jimce: 8:00 AM - 11:00 PM</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-5 mb-3">Saacadaha Xiritaanka</h3>
          <ul className="space-y-2">
            <li>Sabti - Jimce: 11:00 PM - 7:00 AM</li>
          </ul>
        </div>

        {/* Column 4: Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Nala Soo Xiriir</h3>
          <p className="text-sm mb-3">📍 Degmada Hodan, Muqdisho, Soomaaliya</p>
          <p className="text-sm mb-4">📞 +252 619355029</p>

          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/qaalidi.haweenka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
            <a
              href="https://wa.me/252619355029"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kc Restaurant. Xuquuqda oo dhan way dhowrsan yihiin.
      </div>
    </footer>
  );
}

export default Footer;

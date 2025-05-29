import React, { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaLocationArrow,
} from "react-icons/fa6";

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setMessage('Please enter your email.');
    } else if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
    } else {
      setMessage(`Thank you for subscribing, ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section: Social & Subscription */}
        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-4">Connect with us on</h2>
          <div className="flex gap-4 mb-6 text-xl sm:text-2xl flex-wrap">
            <FaFacebookF className="hover:text-purple-600 cursor-pointer" />
            <FaYoutube className="hover:text-purple-600 cursor-pointer" />
            <FaInstagram className="hover:text-purple-600 cursor-pointer" />
            <FaXTwitter className="hover:text-purple-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-purple-600 cursor-pointer" />
          </div>

          <h2 className="text-base sm:text-lg font-semibold mb-2">
            Subscribe to receive the latest updates!
          </h2>
          <div className="flex flex-col sm:flex-row w-full">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 rounded sm:rounded-l border border-white bg-transparent text-white placeholder-white focus:outline-none mb-2 sm:mb-0 sm:mr-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded sm:rounded-r"
            >
              SUBSCRIBE
            </button>
          </div>
          {message && <p className="mt-2 text-sm text-yellow-300">{message}</p>}
        </div>

        {/* Middle Section: Contact Info */}
        <div>
          <h2 className="text-base sm:text-lg font-bold mb-4">CONTACT US</h2>
          <p className="mb-2 text-sm sm:text-base">
            For sales:{" "}
            <a href="mailto:sales@bullworkmobility.com" className="text-purple-400 break-all">
              sales@bullworkmobility.com
            </a>
          </p>
          <p className="mb-2 text-sm sm:text-base">
            For information:{" "}
            <a href="mailto:info@bullworkmobility.com" className="text-purple-400 break-all">
              info@bullworkmobility.com
            </a>
          </p>
          <p className="mb-4 text-sm sm:text-base">Call us at: 8123596969, 8123296969</p>

          <h2 className="text-base sm:text-lg font-bold flex items-center gap-2">
            <FaLocationArrow /> Visit Us:
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            Survey No.26/1 and 27/2, Mallarabanavadi Village,<br />
            Kunigal Bypass Rd, Nelamangala Town,<br />
            Karnataka 562123
          </p>
        </div>

        {/* Right Section: Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">COMPANY</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-purple-400 cursor-pointer">Blogs</li>
              <li className="hover:text-purple-400 cursor-pointer">About Us</li>
              <li className="hover:text-purple-400 cursor-pointer">Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">PRODUCTS</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-purple-400 cursor-pointer">Electric Tractor</li>
              <li className="hover:text-purple-400 cursor-pointer">GLX E-Loader</li>
              <li className="hover:text-purple-400 cursor-pointer">Vamana</li>
              <li className="hover:text-purple-400 cursor-pointer">Warrior</li>
              <li className="hover:text-purple-400 cursor-pointer">0X-1</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">TECHNOLOGY</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-purple-400 cursor-pointer">Autonomy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-white mt-12 pt-6 text-center text-xs sm:text-sm opacity-75">
        © {new Date().getFullYear()} Bullwork Mobility. All rights reserved.
      </div>
    </footer>
  );
}

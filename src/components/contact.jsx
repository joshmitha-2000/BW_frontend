import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaLocationArrow,    // added this
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Social & Subscription */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect with us on</h2>
          <div className="flex gap-4 mb-6 text-2xl">
            <FaFacebookF className="hover:text-purple-600 cursor-pointer" />
            <FaYoutube className="hover:text-purple-600 cursor-pointer" />
            <FaInstagram className="hover:text-purple-600 cursor-pointer" />
            <FaXTwitter className="hover:text-purple-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-purple-600 cursor-pointer" />
          </div>

          <h2 className="text-lg font-semibold mb-2">
            Subscribe to receive the latest updates!
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-l border border-white bg-transparent text-white placeholder-white focus:outline-none"
            />
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-r">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Middle Section: Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
          <p className="mb-2">
            For sales:{" "}
            <a href="mailto:sales@bullworkmobility.com" className="text-purple-400">
              sales@bullworkmobility.com
            </a>
          </p>
          <p className="mb-2">
            For information:{" "}
            <a href="mailto:info@bullworkmobility.com" className="text-purple-400">
              info@bullworkmobility.com
            </a>
          </p>
          <p className="mb-4">Call us at: 8123596969, 8123296969</p>

          <h2 className="text-lg font-bold flex items-center gap-2">
            <FaLocationArrow /> Visit Us:
          </h2>
          <p className="mt-2">
            Survey No.26/1 and 27/2, Mallarabanavadi Village,<br />
            Kunigal Bypass Rd, Nelamangala Town,<br />
            Karnataka 562123
          </p>
        </div>

        {/* Right Section: Footer Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul className="space-y-1">
              <li>Blogs</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">PRODUCTS</h3>
            <ul className="space-y-1">
              <li>Electric Tractor</li>
              <li>GLX E-Loader</li>
              <li>Vamana</li>
              <li>Warrior</li>
              <li>0X-1</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">TECHNOLOGY</h3>
            <ul className="space-y-1">
              <li>Autonomy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-white mt-12 pt-6 text-center text-sm opacity-75">
        © {new Date().getFullYear()} Bullwork Mobility. All rights reserved.
      </div>
    </footer>
  );
}

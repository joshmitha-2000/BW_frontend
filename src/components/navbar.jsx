import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const links = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "TECHNOLOGY", path: "/Technology" },
    { name: "ABOUT US", path: "/Aboutus" },
    { name: "CAREERS", path: "/Careers" },
  ];

  return (
    <nav className="bg-black text-white shadow-md top-0 left-0 right-0 z-50 px-1 fixed">
      <div className="flex items-center justify-between h-14 max-w-7xl mx-auto relative">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="https://www.bullworkmobility.com/images/logo.webp"
            alt="Logo"
            className="h-8 ml-5 w-auto"
          />
          <Link to="/" className="text-2xl ml-2 font-normal tracking-wide">
            BULLWORK MOBILITY
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-normal text-white relative">
          {links.map((link) =>
            link.name === "PRODUCTS" ? (
              <div
                key={link.name}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="relative cursor-pointer"
              >
                <Link
                  to={link.path}
                  className="text-white hover:text-fuchsia-700 transition tracking-wide"
                >
                  {link.name}
                </Link>

                {/* FULL-WIDTH DROPDOWN */}
                {dropdownOpen && (
  <div className="fixed left-0 top-14 w-screen bg-white text-black z-40 shadow-lg border-t border-gray-200">
    <div className="max-w-screen-2xl mx-auto px-6 py-4 grid grid-cols-5 gap-6">
      {products.map((product) => (
        <div key={product.id} className="text-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-60 h-50 object-cover rounded mb-2 mx-auto"
          />
          <p className="font-medium text-black text-2xl tracking-widest">{product.name}</p>
          <Link
            to={`/products/${product.id}`}
            className="text-purple-600 text-xs mt-1 inline-block hover:underline"
          >
            EXPLORE
          </Link>
        </div>
      ))}
    </div>
  </div>
)}

                  
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-fuchsia-700 transition tracking-wide"
              >
                {link.name}
              </Link>
            )
          )}

          {/* Order Button */}
          <Link to="/orders">
            <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-2 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-wide">
              ORDER
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 border-b border-gray-800 hover:text-yellow-400 tracking-wide"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/orders">
            <button className="w-full mt-4 bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-wide">
              ORDER
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

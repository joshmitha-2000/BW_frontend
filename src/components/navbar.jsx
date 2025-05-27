import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/about" },
    { name: "TECHNOLOGY", path: "/Technology" },
    { name: "ABOUT US", path: "/Aboutus" },
    { name: "CAREERS", path: "/Careers" },
  ];

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50 px-1">
      <div className="flex items-center justify-between h-10 max-w-7xl mx-auto">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3 ">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAYAAABjezibAAAEOElEQVRYR82ZjVUbMRCEcQehA9NBqAC7gkAFmAoCFeBUEKggTgWBCkIHoYM4FcQdOPOJ3WMtdHcyxkf0nt796KSdm51d7dmjg/+8jRzfer2e6Pxc/Wo0Gq3eC7dwzGT7RBguwBABznV9rX6hwcU7Avwl2x/VDyEqArzRzc/qC0c/NEix90E2/5rdI+FYRoCwhouXGjgaGhz2BPBUhx9m+1g4HiPAnxpAh7SEfmiQAuhexPRUGB5ygGMN0N9FhwKI/nBzgyEC/K2BB3Vovhtah0F/t7JPLCSSIkDE+d3egDAfVIdBf1NhQG5fhGEeAa65qU4O/Dq0Dk1/5wJ1qPNEls4vE0DdwOe4+Ar32vmgOjT9rQRqqvMkN2TmAEmMCPRUN+/tDQbTYSRI9m8M7B+dnzrAifk9hbYeWOh6MB1G/Zl9cuFY58cO0BOkA7wcUodGyCf0Z5JrCHKAMw1888DIKWfSPlvUnwEkYaeAcYBz3bjWjTzt7F2HJTJ0r8HTBRCaG9r3xWCuP2Pw2aO5zx2IJroO06a9R4AviLCa8ElyBrCJmgBwrHPy0VJ9LpDsMm/WbGuj/oSIe1JKsD3RObvJ1AFycUCSjAgsH7J500jgVNsA3qlpXfbaubqvzboERmoa97zcJGqSdEqMGcCFrqkRY4NNtsStm31WwNokm7whoxA4DcBma8kAznSNFvK2hIFat2fuzNdie0v5L7OdagN38dOFqofsobGuAd/WFjYPwMVmUcpLujvz5zb054OaB6bbUajDNnQQHgQgQNsa1c9N7nZzE8AmHXMZ6rL7AEBnqVi92DaU67BkExbP1DkSBERnG2txfjGNNQWDCbcpEHPLISf1EJGGH9QJoJQVKlqb/ngx1lg5g1zAJG+fjHg6CQxX2DuYETiaEz/AuuY1+jOpTYx9jrS7uPdyc6bu7gToQv1enTTEC3Q1tHgkgKuwC/W9FAUyu9SJukuCdfguQdfPH+6+kjEGWPIVoJhA69NT88EfAq8P4DLYgJBb6sE4qWGwtJLpc6axmiBJtWR40Ro3wx4eSmyVMHQCzFgFKKyW2otfI0LwlZ4HzFnO1qsBMjHsj6V1XiR5m8PXWUkafBBt7PttWqhi0IxNdGxLHwTHMjeil6IAICfm7VHPH7eBivffAmArGx1urv6BahuAaLBUOKTc18ZGS07cC0CvsCOWJvd1ACzNo/asIqfqIdPgXMc8int/7OzIiekX1D4dbgOwJPiN3Lelm4uBla+xDcCFJseEXa2jlmCp+hjbBmC+MxTruA4W85xYxf4uAKtc5IALObFYf+7iYv97gDWqd4IAME/0bw4wlv6dua8yWKokso2L+YihFavgvnRhqSrmxOL+vYuLHWBv7utgkMLB/6ipWqeKwazsr4q+CjfvBWB17usA6MFS/B5+lYtDoq0Sdp8etR5upuTqrQn/ARi8gztuzzu+AAAAAElFTkSuQmCC"
            alt="Logo"
            className="h-8 ml-5 w-auto"
          />
          <Link to="/" className="text-2xl ml-2 font-normal tracking-wide">
            BULLWORK MOBILITY
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-normal text-white">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white hover:text-fuchsia-700 transition tracking-wide"
            >
              {link.name}
            </Link>
          ))}

          {/* Button at the end of desktop links */}
          <Link to="/orders">
  <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-2 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-wide">
    ORDER
  </button>
</Link>
        </div>

        {/* Mobile menu button */}
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

      {/* Mobile Menu */}
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

          {/* Button at the end of mobile menu */}
          <button className="w-full mt-4 bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-wide">
            ORDER
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

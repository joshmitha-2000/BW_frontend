import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [centerIndex, setCenterIndex] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://bullwork-backend.onrender.com/products");
        const data = await res.json();
        setProducts(data);
        setCenterIndex(2);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchProducts();
  }, []);

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % products.length);
  };

  const getIndex = (offset) => (centerIndex + offset + products.length) % products.length;

  const handleOrderNow = (product) => {
    navigate("/orders", { state: { productName: product.name } });
  };

  if (!products.length) return <p className="text-center py-14">Loading products...</p>;

  const productBoxStyle =
    "border border-gray-300 rounded-lg overflow-hidden flex flex-col";

  return (
    <div className="w-full py-14 px-4">
      <div className="w-full flex items-center justify-center gap-6">

        {/* Left product */}
        <div className={`w-1/5 transition duration-300 h-auto ${productBoxStyle}`}>
          <img
            src={products[getIndex(-1)].imageUrl}
            alt={products[getIndex(-1)].name}
            className="w-full h-52 object-cover"
          />
          <div className="p-3 flex flex-col items-center">
            <h3 className="font-semibold text-center">{products[getIndex(-1)].name}</h3>
            <p className="text-sm text-gray-600 text-center line-clamp-2">
              {products[getIndex(-1)].description || "No description"}
            </p>
            <button
              onClick={() => handleOrderNow(products[getIndex(-1)])}
              className="mt-2 px-4 py-1 bg-[#880294] text-white rounded hover:bg-[#a01db1] transition"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-gray-300 text-black text-xl font-bold px-4 py-2 rounded-full shadow hover:bg-gray-400 transition"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        {/* Center product */}
        <div className={`w-1/3 transition duration-300 h-[500px] ${productBoxStyle}`}>
          <img
            src={products[getIndex(0)].imageUrl}
            alt={products[getIndex(0)].name}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-center">{products[getIndex(0)].name}</h2>
            <p className="text-gray-700 text-center mt-2 line-clamp-3">
              {products[getIndex(0)].description || "No description available."}
            </p>
            <button
              onClick={() => handleOrderNow(products[getIndex(0)])}
              className="mt-4 px-6 py-2 bg-[#880294] text-white rounded-lg hover:bg-[#a01db1] transition"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-gray-300 text-black text-xl font-bold px-4 py-2 rounded-full shadow hover:bg-gray-400 transition"
          aria-label="Next Slide"
        >
          &gt;
        </button>

        {/* Right product */}
        <div className={`w-1/5 transition duration-300 h-auto ${productBoxStyle}`}>
          <img
            src={products[getIndex(1)].imageUrl}
            alt={products[getIndex(1)].name}
            className="w-full h-52 object-cover"
          />
          <div className="p-3 flex flex-col items-center">
            <h3 className="font-semibold text-center">{products[getIndex(1)].name}</h3>
            <p className="text-sm text-gray-600 text-center line-clamp-2">
              {products[getIndex(1)].description || "No description"}
            </p>
            <button
              onClick={() => handleOrderNow(products[getIndex(1)])}
              className="mt-2 px-4 py-1 bg-[#880294] text-white rounded hover:bg-[#a01db1] transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === centerIndex ? "bg-[#880294]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

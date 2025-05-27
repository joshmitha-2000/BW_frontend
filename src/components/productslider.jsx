
import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", image: "https://www.bullworkmobility.com/home_products/Vamana%20Pro.webp" },
  { id: 2, name: "Product 2", image: "https://www.bullworkmobility.com/home_products/GLX.webp" },
  { id: 3, name: "Product 3", image: "https://www.bullworkmobility.com/home_products/GLX.webp" },
  { id: 4, name: "Product 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0Hp9N_ykjTejmufSnPkFkyuADaGrFkJAFA&s" },
  { id: 5, name: "Product 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ADdVzzFCmc2dLD7e1UWWNqSfMepibe3O9TaljU0_YOke1lnOc6BL177aqxrrmmNi-TU&usqp=CAU" },
];

export default function ProductCarousel() {
  const [centerIndex, setCenterIndex] = useState(2);

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % products.length);
  };

  const getIndex = (offset) => (centerIndex + offset + products.length) % products.length;

  return (
    <div className="w-full py-14 px-4">
      <div className="w-full flex items-center justify-center gap-6">
        {/* Left image */}
        <div className="w-1/5 transition duration-300 h-64">
          <img
            src={products[getIndex(-1)].image}
            alt=""
            className="w-full h-full object-cover rounded-lg opacity-70"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-gray-300 text-black text-xl font-bold px-4 py-2 rounded-full shadow hover:bg-gray-400 transition"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        {/* Center image */}
        <div className="w-2/5 transition duration-300" style={{ height: "450px" }}>
  <img
    src={products[getIndex(0)].image}
    alt=""
    className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-white"
  />
</div>


        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-gray-300 text-black text-xl font-bold px-4 py-2 rounded-full shadow hover:bg-gray-400 transition"
          aria-label="Next Slide"
        >
          &gt;
        </button>

        {/* Right image */}
        <div className="w-1/5 transition duration-300 h-64">
          <img
            src={products[getIndex(1)].image}
            alt=""
            className="w-full h-full object-cover rounded-lg opacity-70"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === centerIndex ? 'bg-[#880294]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

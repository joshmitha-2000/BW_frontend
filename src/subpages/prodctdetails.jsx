import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Jointhebullwork from "../components/jointhebullwork";
import ContactPage from "../components/contact";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [feature, setFeature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductAndFeature = async () => {
      try {
        setLoading(true);

        // Fetch product data
        const productRes = await fetch(`https://bullwork-backend.onrender.com/products/${id}`);
        if (!productRes.ok) throw new Error("Failed to fetch product");
        const productData = await productRes.json();
        setProduct(productData);

        // Fetch feature data for the same product id
        const featureRes = await fetch(`https://bullwork-backend.onrender.com/api/features/${id}`);
        if (!featureRes.ok) throw new Error("Failed to fetch features");
        const featureData = await featureRes.json();
        setFeature(featureData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndFeature();
  }, [id]);

  if (loading) return <p className="text-center pt-20">Loading...</p>;
  if (error) return <p className="text-center pt-20 text-red-600">{error}</p>;
  if (!product) return <p className="text-center pt-20">No product found.</p>;

  return (
    <div className="w-screen min-h-screen object-contain">
      {/* Product Image */}
      <img
        src={product.image2 || "/placeholder.png"}
        alt={product.name}
        className="w-screen min-h-screen object-contain"
      />

      <div className="bg-gray-50">
        <div className="w-full text-center px-4 pt-10">
          <h1
            className="text-4xl sm:text-7xl text-[#590561] mb-10"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            {product.name}
          </h1>

          {/* Description */}
          <p className="text-center text-gray-700 max-w-[90vw] sm:max-w-3xl mx-auto text-base sm:text-lg">
            {product.description || "No description available."}
          </p>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white flex flex-wrap items-center justify-evenly px-5 py-2 shadow-lg mt-10 mb-10 gap-2 sm:gap-4">
          <ul className="flex flex-wrap gap-3 sm:gap-8 justify-center w-full sm:w-auto">
            <li>
              <a href="#features" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                1. Features
              </a>
            </li>
            <li>
              <a href="#vedio" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                2. Vedio
              </a>
            </li>
            <li>
              <a href="" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                3. Tco
              </a>
            </li>
            <li>
              <a href="" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                4. specifications
              </a>
            </li>
          </ul>

          <Link to='/orders' className="w-full sm:w-auto flex justify-center">
            <button
              className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                         text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg
                         shadow-lg hover:brightness-110 transition duration-300 
                         text-sm font-normal tracking-widest max-w-xs w-full sm:w-auto"
            >
              ORDER
            </button>
          </Link>
        </nav>

        {/* Features Section */}
        <section
          id="automation"
          className="relative w-full h-[600px] sm:h-[500px] mb-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${feature?.imageUrl || "/fallback-feature-image.webp"})`,
          }}
        >
          {/* Optional: Dark overlay for readability */}
          <div className="absolute inset-0 z-0" />

          {/* Content on top of the image */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-20 sm:pt-10 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-4xl font-bold text-black drop-shadow-lg pb-3 mb-5 text-center max-w-[90vw] sm:max-w-none">
              {feature?.title}
            </h2>

            {/* Feature texts */}
            <div className="relative w-full max-w-5xl h-[220px] sm:h-[300px] mt-4 sm:mt-6">
              {/* Feature 1 */}
              <div className="absolute top-2 left-4 sm:left-20 text-white bg-fuchsia-500 bg-opacity-70 p-3 sm:p-4 rounded-lg max-w-xs max-w-[80vw] sm:max-w-xs">
                <p>{feature?.feature1}</p>
              </div>

              {/* Feature 2 */}
              <div className="absolute top-10 right-4 sm:right-0 text-white bg-purple-700 bg-opacity-70 p-3 sm:p-4 rounded-lg max-w-xs max-w-[80vw] sm:max-w-xs">
                <p>{feature?.feature2}</p>
              </div>

              {/* Feature 3 */}
              <div className="absolute bottom-0 left-10 sm:left-40 transform -translate-x-1/2 text-white bg-indigo-600 bg-opacity-70 p-3 sm:p-4 rounded-lg max-w-xs max-w-[80vw] sm:max-w-xs">
                <p>{feature?.feature3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <video
          src={product.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full mb-10 h-[250px] sm:h-[400px] object-contain rounded-l-full bg-transparent"
        />
      </div>
      <Jointhebullwork/>
      <ContactPage/>
    </div>
  );
};

export default ProductDetailsPage;

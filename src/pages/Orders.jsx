import React, { useState, useEffect } from "react";
import ContactPage from "../components/contact";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [type, setType] = useState("INDIVIDUAL");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]); // for fetched products

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    aadharNumber: "",
    panNumber: "",
    productId: "", // will store product ID
    message: "",
  });

  // Fetch products from backend API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://bullwork-backend.onrender.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data); // assuming API returns array of products with {id, name}
      } catch (err) {
        alert("Error loading products: " + err.message);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.productId) {
      alert("Please select a product");
      return;
    }

    try {
      const res = await fetch("https://bullwork-backend.onrender.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          orderType: type.toUpperCase(),
          productId: Number(formData.productId),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit order");

      await res.json();
      alert("Order placed successfully!");
      navigate("/success");

      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        aadharNumber: "",
        panNumber: "",
        productId: "",
        message: "",
      });
      setType("INDIVIDUAL");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="bg-[#4b0052] h-[50vh] w-full flex flex-col justify-center items-center p-18 text-white text-center">
          <h1 className="text-center text-4xl font-medium uppercase tracking-widest">
            ORDER FORM
          </h1>
          <p className="mt-2 text-sm md:text-base mb-18">
            Fill in the below details to order products
          </p>
        </div>

        <div className="max-w-5xl mx-auto -mt-32 bg-white p-8 rounded-xl shadow-xl relative z-10">
          <div className="flex justify-center gap-4 mb-8">
            <button
              type="button"
              onClick={() => setType("INDIVIDUAL")}
              className={`px-6 py-2 rounded-md font-semibold transition border ${
                type === "INDIVIDUAL"
                  ? "bg-[#4b0052] text-white border-white"
                  : "bg-white text-[#4b0052] border-[#4b0052]"
              }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setType("COMPANY")}
              className={`px-6 py-2 rounded-md font-semibold transition border ${
                type === "COMPANY"
                  ? "bg-[#4b0052] text-white border-white"
                  : "bg-white text-[#4b0052] border-[#4b0052]"
              }`}
            >
              Company
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block mb-1 font-semibold">Name*</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Phone Number*</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Aadhar Number</label>
              <input
                type="text"
                name="aadharNumber"
                placeholder="Enter Aadhar Number"
                value={formData.aadharNumber}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">PAN Number</label>
              <input
                type="text"
                name="panNumber"
                placeholder="Enter PAN Number"
                value={formData.panNumber}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold">Select Product</label>
              <select
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
                required
              >
                <option value="">Select a Product</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Enter your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-purple-800 rounded px-3 py-2"
              />
            </div>

 <div className="md:col-span-2 flex justify-center mt-4">
  <button type="submit"
            className="border-b-black border-2 px-8 py-3 rounded-lg
                       shadow-lg hover:brightness-110 transition duration-300 mb-6  font-normal tracking-widest mr-6"
          >
          
           BOOK PRODUCT
          </button>
  </div>
  <div className="md:col-span-2 flex justify-center mt-4">
  <p className="text-center text-sm md:text-base">
    Looking for a Product Demo?{' '}
    <a
      href="/demo"
      className="text-purple-800 font-semibold underline hover:text-purple-600 transition"
    >
      Book a Demo
    </a>
  </p>
</div>
      </form>
    </div>
    <section className="bg-gray-200 text-center p-10 mt-14 rounded-lg shadow-sm">
        <h1 className="text-black px-8 py-3 rounded-lg text-center mb-6 text-2xl font-semibold tracking-widest">
          JOIN THE BULLWORK FAMILY
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => alert("Redirecting to order page...")}
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-8 py-3 rounded-lg shadow-lg 
                       hover:brightness-110 transition duration-300 text-sm font-medium tracking-widest"
          >
            ORDER
          </button>
          <button
            onClick={() => navigate('/demo')}
            className="border border-black px-8 py-3 rounded-lg shadow-lg 
                       hover:bg-black hover:text-white transition duration-300 
                       text-sm font-medium tracking-widest"
          >
            Book Demo
          </button>
        </div>
      </section>


<ContactPage/>
  </div>

</>
);
};

export default OrderPage;

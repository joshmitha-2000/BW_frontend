import React, { useState, useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";

const Demo = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    productId: "",
    message: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
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
      const res = await fetch("http://localhost:5000/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productId: Number(formData.productId),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit order");

      await res.json();
      alert("Demo booked successfully!");

      navigate("/success");

      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        productId: "",
        message: "",
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#4b0052] h-[50vh] w-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-medium uppercase tracking-widest">DEMO FORM</h1>
        <p className="mt-2 text-sm md:text-base">Fill in the below details to book a demo</p>
      </div>

      <div className="max-w-4xl mx-auto -mt-28 bg-white p-8 rounded-xl shadow-xl relative z-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold">Name*</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full border border-purple-800 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full border border-purple-800 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border border-purple-800 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full border border-purple-800 rounded px-3 py-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">Select Product</label>
            <select
              name="productId"
              required
              value={formData.productId}
              onChange={handleChange}
              className="w-full border border-purple-800 rounded px-3 py-2"
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
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="w-full border border-purple-800 rounded px-3 py-2"
            />
          </div>

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit" 
              className="border-b-black border-2 px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 mb-6 font-normal tracking-widest"
            >
              BOOK DEMO
            </button>
          </div>

          <div className="md:col-span-2 text-center mt-2">
            <p className="text-sm md:text-base">
              Looking for a Product Demo?{" "}
              <Link
                to="/orders" 
                className="text-purple-800 font-semibold underline hover:text-purple-600 transition"
              >
                Book Product
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Demo;

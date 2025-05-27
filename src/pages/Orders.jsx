// src/pages/Order.jsx
import React, { useState } from 'react';
import ContactPage from '../components/contact';

const OrderPage = () => {
  const [type, setType] = useState("individual");

  return (
   <>
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-[#4b0052] h-[50vh] w-full flex flex-col justify-center items-center p-18 text-white text-center">
        <h1 className="text-center text-4xl font-medium uppercase tracking-widest">ORDER FORM</h1>
        <p className="mt-2 text-sm md:text-base mb-18">Fill in the below details to order products</p>
      </div>

      {/* Form Card */}
      <div className="max-w-5xl mx-auto -mt-32 bg-white p-8 rounded-xl shadow-xl relative z-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setType("individual")}
            className={`px-6 py-2 rounded-md font-semibold transition border ${
              type === "individual"
                ? "bg-[#4b0052] text-white border-white"
                : "bg-white text-[#4b0052] border-[#4b0052]"
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setType("company")}
            className={`px-6 py-2 rounded-md font-semibold transition border ${
              type === "company"
                ? "bg-[#4b0052] text-white border-white"
                : "bg-white text-[#4b0052] border-[#4b0052]"
            }`}
          >
            Company
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label className="block mb-1 font-semibold">Name*</label>
    <input type="text" required placeholder="Enter Name" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Phone Number*</label>
    <input type="tel" required placeholder="Enter Phone Number" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Email Address</label>
    <input type="email" placeholder="Enter Email Address" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Address</label>
    <input type="text" placeholder="Enter Address" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Country</label>
    <select className="w-full border border-purple-800 rounded px-3 py-2">
      <option>Select Country</option>
      <option>India</option>
      <option>USA</option>
    </select>
  </div>
  <div>
    <label className="block mb-1 font-semibold">State</label>
    <select className="w-full border border-purple-800 rounded px-3 py-2">
      <option>Select State</option>
      <option>Tamil Nadu</option>
      <option>Kerala</option>
    </select>
  </div>
  <div>
    <label className="block mb-1 font-semibold">City</label>
    <input type="text" placeholder="Enter City" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Pincode</label>
    <input type="text" placeholder="Enter Pincode" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Aadhar Number</label>
    <input type="text" placeholder="Enter Aadhar Number" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">PAN Number</label>
    <input type="text" placeholder="Enter PAN Number" className="w-full border border-purple-800 rounded px-3 py-2" />
  </div>

  {/* Select Product - Full width */}
  <div className="md:col-span-2">
    <label className="block mb-1 font-semibold">Select Product</label>
    <select className="w-full border border-purple-800 rounded px-3 py-2">
      <option>Select a Product</option>
      <option>Chair</option>
      <option>Table</option>
      <option>Bed</option>
    </select>
  </div>

  {/* Message - Full width */}
  <div className="md:col-span-2">
    <label className="block mb-1 font-semibold">Message</label>
    <textarea rows="4" placeholder="Enter your message..." className="w-full border border-purple-800 rounded px-3 py-2"></textarea>
  </div>

  {/* Submit button */}
  <div className="md:col-span-2 flex justify-center mt-4">
  <button
            className="border-b-black border-2 px-8 py-3 rounded-lg
                       shadow-lg hover:brightness-110 transition duration-300 mb-6  font-normal tracking-widest mr-6"
          >
           BOOK PRODUCT
          </button>
  </div>

  {/* Demo button */}
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
            onClick={() => alert("Booking a demo...")}
            className="border border-black px-8 py-3 rounded-lg shadow-lg 
                       hover:bg-black hover:text-white transition duration-300 
                       text-sm font-medium tracking-widest"
          >
            Book Demo
          </button>
        </div>
      </section>


<ContactPage/>
   </>
    
  );
};

export default OrderPage;

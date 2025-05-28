import React from 'react';
import BullworkGallery from '../components/bw_gallary';
import CurrentOpenPositions from '../components/currentjobs';
import ContactPage from '../components/contact';

export default function Careers() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden mt-16">


      {/* Life @ Bullwork Section */}
      <section>
        <h1 className="text-3xl font-bold text-center mt-10 mb-10 uppercase">
          Life @ Bullwork Mobility
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <img
            src="https://www.bullworkmobility.com/careers/life/life1.webp"
            alt="Life 1"
            className="col-span-2 w-full h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life2.webp"
            alt="Life 2"
            className="col-span-1 w-full h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life3.webp"
            alt="Life 3"
            className="col-span-1 w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-4 gap-4">
          <img
            src="https://www.bullworkmobility.com/careers/life/life4.webp"
            alt="Life 4"
            className="col-span-1 w-full h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life5.webp"
            alt="Life 5"
            className="col-span-1 w-full h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life6.webp"
            alt="Life 6"
            className="col-span-2 w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Join Our Team Section */}
      <section>
        <h1 className="text-3xl mt-14 font-semibold text-center uppercase tracking-widest mb-5">
          Join Our Awesome Team
        </h1>
        <p className="text-center mb-5 font-semibold text-gray-700">
          At Bullwork Mobility, we are on the lookout for individuals who are driven and
          dedicated to making a difference and contribute to the acceleration of
          innovative solutions in sustainable agriculture and construction.
        </p>
        <button
          onClick={() => window.location.href = 'mailto:jobs@bullworkmobility.com'}
          className="block mx-auto bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                     text-white px-4 py-2 rounded-lg shadow-lg 
                     hover:brightness-110 transition duration-300 
                     text-sm font-medium tracking-widest"
        >
          APPLY NOW
        </button>
      </section>

      {/* Gallery Component */}
      <BullworkGallery />

      {/* Open Positions */}
      <CurrentOpenPositions />

      {/* Think You Have What It Takes */}
      <section className="max-w-4xl mx-auto mt-16 bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Think you have what it takes to innovate with us?
        </h2>
        <p className="text-sm text-gray-600 mb-4">MAIL US AT</p>
        <div className="flex justify-center items-center gap-2">
          <span className="text-md font-medium text-gray-800">
            jobs@bullworkmobility.com
          </span>
          <button
            onClick={() => window.location.href = 'mailto:jobs@bullworkmobility.com'}
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
            aria-label="Email us"
          >
            &gt;
          </button>
        </div>
      </section>

      {/* Bottom Section */}
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

      {/* Contact Section */}
      <ContactPage />
    </div>
  );
}

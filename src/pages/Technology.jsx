
import React from 'react';
import SimpleToggleSlider from '../components/slider1';
import ImageToggleSlider2 from '../components/slider2';
import ContactPage from '../components/contact';

export default function Technology() {
  return (
    <>
    <div className="relative w-screen h-screen">
      <img
        src="https://www.bullworkmobility.com/technology/techmain.webp"
        alt="Technology"
        className="w-full h-full object-cover"
      />
      <div className="absolute left-60 top-1/2 transform -translate-y-1/2 text-white">
        <h1 className="text-7xl mt-28 font-bold">BHAI</h1>
        <p className="mt-4 ">Envisioned by Bullwork Mobility</p>
      </div>
    </div>
    <nav className="bg-gray-100 flex items-center justify-evenly px-5 py-2 shadow-lg ">
  <ul className="flex gap-4 sm:gap-8">
  <li><a href="#automation" className="hover:text-purple-500 cursor-pointer">1. Automation</a></li>
  <li><a href="#control-system" className="hover:text-purple-500 cursor-pointer">2. Control System</a></li>
  <li><a href="#bhai-app" className="hover:text-purple-500 cursor-pointer">3. BHAI App</a></li>
  <li><a href="#analytics" className="hover:text-purple-500 cursor-pointer">4. Analytics</a></li>
</ul>

  <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                     text-white px-8 py-3 rounded-lg
                     shadow-lg hover:brightness-110 transition duration-300 
                     text-sm font-normal tracking-widest">
    ORDER
  </button>
</nav>
<section id="automation">
<h1 className="text-3xl sm:text-3xl mt-7 font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">

Unleash electric vehicle's true power with BHAI by your side


  </h1>
  <p className="text-black font-light  text-center mb-14">
  Experience the future of electric vehicles, seamlessly controlled via mobile app, featuring autonomous navigation guided by mission files

  
  </p>
  <video
            src="https://www.bullworkmobility.com/technology/Technology_page.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full mb-10 h-[400px] object-contain rounded-l-full bg-transparent"
          />
</section>
<section className='bg-gray-100' id="control-system">
<h1 className="text-3xl sm:text-3xl mt-16 font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">
discover bullwork's control system

  </h1>
  <p className="text-black font-light  text-center mb-3">
Bullwork offers a variety of unique control options tailored to their vehicles
  
  </p>
<div className="px-36 py-10 space-y-10">

{/* Section 1 - Remote Control System */}
<div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
  {/* Left: Text */}
  <div className="w-1/2">
    <h2 className="text-3xl font-bold  mb-2">Control through Remote</h2>
    <p className="text-gray-700">The vehicle features a remote control, enabling you to manage its movements, including steering, accelerating, and braking, all from a distance for added convenience and control.</p>
  </div>
  {/* Right: Image */}
  <div className="w-1/3">
    <img
      src="https://www.bullworkmobility.com/technology/remote.webp"
      alt="Remote Control System"
      className="rounded-lg shadow-lg"
    />
  </div>
</div>

{/* Section 2 - BHAI App */}
<div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
  <div className="w-1/2">
    <h2 className="text-3xl font-bold mb-2">Control through App</h2>
    <p className="text-gray-700">The vehicle can be controlled through a user-friendly mobile app, offering remote access and autonomous features.</p>
  </div>
  <div className="w-1/3">
    <img
      src="https://www.bullworkmobility.com/technology/app.webp"
      alt="BHAI App"
      className="rounded-lg shadow-lg"
    />
  </div>
</div>

{/* Section 3 - Draw Wire System */}
<div className="flex items-center  justify-between  bg-white rounded-lg shadow-md p-6 ">
  <div className="w-1/2">
    <h2 className="text-3xl font-bold  mb-2">Control through Draw-wire</h2>
    <p className="text-gray-700">The vehicle, featuring a new and innovative tethered control system, operates seamlessly through a wired connection for easy control.</p>
  </div>
  <div className="w-1/3">
    <img
      src="https://www.bullworkmobility.com/technology/drawwire.webp"
      alt="Draw Wire System"
      className="rounded-lg shadow-lg"
    />
  </div>
</div>
</div>
</section>
<section id="bhai-app">
<h1 className="text-3xl sm:text-2xl mt-7 font-medium max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">

Elevate from action to insight Track metrics, Optimize operations


  </h1>
  <SimpleToggleSlider/>

</section>
<section id="analytics">
<ImageToggleSlider2/>
</section>
<section className="bg-gray-50 py-12">
  <h1 className="text-black px-4 py-2 rounded-lg text-center text-4xl font-stretch-extra-expanded tracking-wide mb-8">
    Explore our Autonomous Vehicles
  </h1>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto px-4">
    {/* Vehicle Card 1 */}
    <div className="bg-white rounded-2xl shadow-2xl w-96 h-[460px] flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="h-64 w-full">
        <img
          src="https://www.bullworkmobility.com/home_products/beast.webp"
          alt="BEAST"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center  text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">BEAST</h3>
        <p className=" text-gray-600">The mighty Autonomous electric tractor</p>
      </div>
    </div>

    {/* Vehicle Card 2 */}
    <div className="bg-white rounded-2xl shadow-2xl w-96 h-[460px] flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="h-64 w-full">
        <img
          src="https://www.bullworkmobility.com/home_products/Vamana%20Pro.webp"
          alt="YAMAHA"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-3 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-2">YAMAHA</h3>
        <p className=" text-gray-600">The ultimate unmanned ground vehicle</p>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-200 text-center p-10">
    <h1 className=" text-black px-8 py-3 rounded-lg text-center mb-6 text-2xl font-normal tracking-widest">JOIN THE BULLWORK FAMILY </h1>
    <button
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-8 py-3 rounded-lg
                       shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest mr-6"
          >
            ORDER
          </button>
          <button
  className="border-black px-8 py-3 rounded-lg
             shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest"
>
  Book Demo
</button>

</section>
<ContactPage/>



    </>
  );
}

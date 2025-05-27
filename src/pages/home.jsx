import React from "react";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/productslider";
import IntroductionBhai from "../components/introdcutionbhai";
import Blog from "./blog";
import LogoScroller from "../components/logoscroll1";
import LogoScroller2 from "../components/logoscroller2";
import FAQSection from "../components/askedqusetions";
import ContactPage from "../components/contact";

export default function Home() {
  const items = ["Electric Tractors", "Sprayers", "Loaders", "Bots"];

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://www.bullworkmobility.com/index/homerender_main.png"
          alt="Home Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay content (Button + Text) */}
        <div className="absolute top-[87%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6 text-center">
          <button
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-8 py-3 rounded-lg
                       shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest"
          >
            ORDER NOW
          </button>
          <p className="text-black text-3xl sm:text-2xl font-normal max-w-7xl mx-auto leading-relaxed uppercase tracking-widest">
            We provide full stack electric autonomous solutions for a Cleaner, Greener Tomorrow.
          </p>
        </div>
      </div>

      <section className="mt-6 px-4">
        {/* Existing text */}
        <p className="text-center mb-2 font-semibold text-gray-700">
          Electric Tractors | Sprayers | Loaders | Bots
        </p>

        {/* Rounded transparent buttons */}
        <button
  onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
  className="mx-auto flex items-center justify-center rounded-full border border-gray-400 bg-gray-300 backdrop-blur-sm w-10 h-10 hover:bg-opacity-40 transition"
  aria-label="Scroll Down"
>
  {/* SVG arrow */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 font-bold text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


        <h1 className="font-semibold tracking-wideest text-4xl text-center mt-24">
          PRODUCTS
        </h1>
        <p className="text-center mb-4 text-gray-700 mt-1.5">
          Agriculture | Construction | Material Handling | Mining
        </p>
      </section>

      <ProductCarousel />

      <section>
        <h3 className="text-3xl sm:text-3xl font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">
          Why Choose Bullwork Mobility
        </h3>
        <p className="text-black font-light text-sm text-center mb-3">
          Designed in Bharath, Made for the World
        </p>

        <div className="max-w-4xl mx-auto p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Box 1 */}
            <div className="p-6 flex flex-col items-center text-center transition-transform duration-700 ease-in-out hover:scale-125 hover:z-10 cursor-pointer">
              <img
                src="https://www.bullworkmobility.com/why_BM/icon1.webp"
                alt="Lowest Operational Cost"
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-[#56035e] text-xl font-light mb-4 tracking-widest">
                Lowest Operational Cost
              </h2>
              <p className="text-black text-sm">
                Electric Tractors save up to 80% on diesel expenses with our innovative solution
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 flex flex-col items-center text-center transition-transform duration-700 ease-in-out hover:scale-125 hover:z-10 cursor-pointer">
              <img
                src="https://www.bullworkmobility.com/why_BM/icon2.webp"
                alt="Next-gen Technology"
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-[#56035e] text-xl font-light mb-4 tracking-widest">
                Next-gen Technology
              </h2>
              <p className="text-black">
                Autonomous and drive-by-wire system Smart, data driven and connected
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 flex flex-col items-center text-center transition-transform duration-700 ease-in-out hover:scale-125 hover:z-10 cursor-pointer">
              <img
                src="https://www.bullworkmobility.com/why_BM/icon3.webp"
                alt="Automation"
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-[#56035e] text-xl font-light mb-4 tracking-widest">
                Automation
              </h2>
              <p className="text-black">
                Automating repetitive skilled tasks to enhance productivity
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 flex flex-col items-center text-center transition-transform duration-700 ease-in-out hover:scale-125 hover:z-10 cursor-pointer">
              <img
                src="https://www.bullworkmobility.com/why_BM/icon4.webp"
                alt="Save Environment"
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-[#56035e] text-xl font-light mb-4 tracking-widest">
                Save Environment
              </h2>
              <p className="text-black">
                Reduces upto 10 tons of CO2 annually per machine
              </p>
            </div>
          </div>
        </div>
      </section>

      <IntroductionBhai />

      <section>
        {/* Show only first 3 blog posts */}
        <Blog limit={3} />

        {/* Explore More Blogs Button */}
        <div className="text-center mt-6">
          <Link
            to="/blogs"
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-8 py-3 rounded-lg
                       shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest"
          >
            Explore More Blogs
          </Link>
        </div>
      </section>
      <section>
        <h1 className="text-3xl sm:text-3xl mt-16 font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">PRESS RELEASES</h1>
        <LogoScroller/>
      </section>
      <section>
      <h1 className="text-3xl sm:text-3xl mt-20 font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">AWARDS AND CERTIFICAIONS </h1>
        <LogoScroller2/>
      </section>
      <section>
        <img src="https://www.bullworkmobility.com/images/greener_bharath.webp" alt="" />

      </section>
      <section>
  <h1 className="text-3xl sm:text-3xl mt-7 font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">
    SHOW CASING THE INNOVATION
  </h1>
  <p className="text-black font-light text-sm text-center mb-3">
    Bullwork's Electric Vehicles at Major Events  
  </p>

  <div className="flex justify-center">
    <img
      src="https://www.bullworkmobility.com/images/events.webp"
      alt=""
      className="max-w-5xl w-full h-auto rounded-md"
    />
  </div>
</section>
<section>
  <FAQSection limit={5} />

  <div className="flex justify-center mt-4">
    <Link to="/askedquestions">
      <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                         text-white px-8 py-3 rounded-lg
                         shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest">
        View More
      </button>
    </Link>
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
<section>
  <ContactPage/>
</section>


    </>
  );
}

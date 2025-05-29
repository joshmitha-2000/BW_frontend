import React from "react";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/productslider";
import IntroductionBhai from "../components/introdcutionbhai";
import Blog from "./blog";
import LogoScroller from "../components/logoscroll1";
import LogoScroller2 from "../components/logoscroller2";
import FAQSection from "../components/askedqusetions";
import ContactPage from "../components/contact";
import Jointhebullwork from "../components/jointhebullwork";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://www.bullworkmobility.com/index/homerender_main.png"
          alt="Home Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[87%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6 text-center">
          <Link to="/orders">
            <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest">
              ORDER NOW
            </button>
          </Link>
          <p className="text-black text-xl sm:text-2xl lg:text-3xl font-normal max-w-4xl mx-auto leading-relaxed uppercase tracking-widest">
            We provide full stack electric autonomous solutions for a Cleaner, Greener Tomorrow.
          </p>
        </div>
      </div>

      {/* Products Introduction */}
      <section className="mt-6 px-4">
        <p className="text-center mb-2 font-semibold text-gray-700 text-sm sm:text-base">
          Electric Tractors | Sprayers | Loaders | Bots
        </p>

        <button
          onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
          className="mx-auto flex items-center justify-center rounded-full border border-gray-400 bg-gray-300 backdrop-blur-sm w-10 h-10 hover:bg-opacity-40 transition"
          aria-label="Scroll Down"
        >
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

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-widest text-center mt-14">
          PRODUCTS
        </h1>
        <p className="text-center mb-4 text-gray-700 text-sm sm:text-base mt-1.5">
          Agriculture | Construction | Material Handling | Mining
        </p>
      </section>

      <ProductCarousel />

      {/* Why Choose Section */}
      <section className="px-4 sm:px-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-10 uppercase tracking-widest">
          Why Choose Bullwork Mobility
        </h3>
        <p className="text-black font-light text-sm text-center mb-6">
          Designed in Bharath, Made for the World
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {/* Feature Cards */}
          {[
            {
              img: "https://www.bullworkmobility.com/why_BM/icon1.webp",
              title: "Lowest Operational Cost",
              desc: "Electric Tractors save up to 80% on diesel expenses with our innovative solution",
            },
            {
              img: "https://www.bullworkmobility.com/why_BM/icon2.webp",
              title: "Next-gen Technology",
              desc: "Autonomous and drive-by-wire system Smart, data driven and connected",
            },
            {
              img: "https://www.bullworkmobility.com/why_BM/icon3.webp",
              title: "Automation",
              desc: "Automating repetitive skilled tasks to enhance productivity",
            },
            {
              img: "https://www.bullworkmobility.com/why_BM/icon4.webp",
              title: "Save Environment",
              desc: "Reduces upto 10 tons of CO2 annually per machine",
            },
          ].map(({ img, title, desc }) => (
            <div
              key={title}
              className="p-6 flex flex-col items-center text-center transition-transform duration-700 ease-in-out hover:scale-105 hover:z-10 cursor-pointer"
            >
              <img src={img} alt={title} className="w-20 h-20 object-contain mb-4" />
              <h2 className="text-[#56035e] text-lg font-medium mb-2 tracking-widest">{title}</h2>
              <p className="text-black text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <IntroductionBhai />

      {/* Blogs */}
      <section className="px-4">
        <Blog limit={3} />
        <div className="text-center mt-6">
          <Link
            to="/blogs"
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest"
          >
            Explore More Blogs
          </Link>
        </div>
      </section>

      {/* Press */}
      <section>
        <h1 className="text-xl sm:text-2xl md:text-3xl mt-16 font-semibold text-center uppercase tracking-widest">
          PRESS RELEASES
        </h1>
        <LogoScroller />
      </section>

      {/* Awards */}
      <section>
        <h1 className="text-xl sm:text-2xl md:text-3xl mt-20 font-semibold text-center uppercase tracking-widest">
          AWARDS AND CERTIFICATIONS
        </h1>
        <LogoScroller2 />
      </section>

      {/* Greener Bharath Image */}
      <section>
        <img
          src="https://www.bullworkmobility.com/images/greener_bharath.webp"
          alt="Greener Bharath"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Showcasing Innovation */}
      <section className="px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl mt-7 font-semibold text-center uppercase tracking-widest">
          SHOWCASING THE INNOVATION
        </h1>
        <p className="text-black font-light text-sm text-center mb-3">
          Bullwork's Electric Vehicles at Major Events
        </p>
        <div className="flex justify-center">
          <img
            src="https://www.bullworkmobility.com/images/events.webp"
            alt="Events"
            className="max-w-5xl w-full h-auto rounded-md"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4">
        <FAQSection limit={5} />
        <div className="flex justify-center mt-4">
          <Link to="/askedquestions">
            <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* Join Section */}
      <Jointhebullwork/>

      {/* Contact */}
      <section>
        <ContactPage />
      </section>
    </>
  );
}

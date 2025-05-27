import React from 'react';
import ContactPage from '../components/contact';

export default function Aboutus() {
  return (
    <>
      <section className="w-screen h-screen">
        <img
          src="https://www.bullworkmobility.com/aboutus/teampic.webp"
          alt="Team"
          className="w-full h-full object-cover"
        />
      </section>
      <section>
        <h1 className="text-black px-4 py-2 mt-7 rounded-lg text-center text-4xl font-stretch-extra-expanded tracking-widest mb-8">
We want to change the world,<br/>
we think we are crazy enough to do it
</h1>
      </section>
      <section className=" bg-gray-100 max-w-7xl mx-auto py-4 px-4">
  <h1 className="text-center uppercase font-medium mb-8 text-3xl">Our Guiding partner</h1>
  <div className=" flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg">
    {/* Left: Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://www.bullworkmobility.com/aboutus/mahesh%20shetty.webp"
        alt="Mahesh Shetty"
        className="rounded-lg w-2/4 max-h-[400px] object-cover"
      />
    </div>

    {/* Right: Text */}
    <div className="md:w-1/2 text-left">
      <h2 className="text-4xl font-bold mb-4 uppercase">MR. Mahesh Shetty</h2>
      <p className="text-gray-700 leading-relaxed">
        Joining in our journey to change the landscape of utility vehicles: Multiplex Group has been our guiding partner with Mr. Mahesh Shetty donning the role of Chairman to take the organization to its next level.
      </p>
    </div>
  </div>
</section>
<section className="max-w-7xl mx-auto py-12 px-6">
  <h1 className="text-center text-3xl uppercase bg-gray-50 mb-10">Our Co-Founders</h1>

  <div className="flex flex-col md:flex-row justify-center  items-center gap-10">
    {/* Hemanth */}
    <div className="text-center">
      <img
        src="https://www.bullworkmobility.com/aboutus/hemanth.webp"
        alt="Hemanth Kumar"
        className="w-50 h-50 object-cover rounded-lg shadow-md mx-auto"
      />
      <h2 className="mt-4 text-lg font-semibold">Hemanth Kumar</h2>
      <p className="text-gray-600">CEO</p>
      <a href="https://www.linkedin.com/in/hemanthkumar" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6 inline-block mt-2" />
      </a>
    </div>

    {/* Harsha */}
    <div className="text-center">
      <img
        src="https://www.bullworkmobility.com/aboutus/harsha.webp"
        alt="Dr. Sriharsha Sheshanarayana"
        className="w-50 h-50 object-cover rounded-lg shadow-md mx-auto"
      />
      <h2 className="mt-4 text-lg font-semibold">Dr. Sriharsha Sheshanarayana</h2>
      <p className="text-gray-600">CTO</p>
      <a href="https://www.linkedin.com/in/harsha" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6 inline-block mt-2" />
      </a>
    </div>

    {/* Vinay */}
    <div className="text-center">
      <img
        src="https://www.bullworkmobility.com/aboutus/vinay.webp"
        alt="Vinay Raghuram"
        className="w-50 h-50 object-cover rounded-lg shadow-md mx-auto"
      />
      <h2 className="mt-4 text-lg font-semibold">Vinay Raghuram</h2>
      <p className="text-gray-600">COO</p>
      <a href="https://www.linkedin.com/in/vinayraghuram" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6 inline-block mt-2" />
      </a>
    </div>
  </div>
</section>

<h1 className="text-center text-3xl uppercase font-medium mt-5 bg-gray-50 mb-3">Our R&D FACILITY</h1>
<p className='text-center tracking-wide'>Driving the forefront of technological advancement, Our R&D facility is located in Nelamangala, Bangalore where ideas are transformed into reality</p>
<section className="max-w-7xl mx-auto px-4 py-12">
  
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">

    {/* Left: Taller and narrower image */}
    <div className="w-full md:w-[20%]">
      <img
        src="https://www.bullworkmobility.com/facility/facility3.webp"
        alt="Facility 3"
        className="w-full h-[490px] object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Right: Two stacked images */}
    <div className="w-full md:w-[50%] flex flex-col gap-6">
      <img
        src="https://www.bullworkmobility.com/facility/facility1.webp"
        alt="Facility 1"
        className="w-full h-[230px] object-cover rounded-lg shadow-md"
      />
      <img
        src="https://www.bullworkmobility.com/facility/facility2.webp"
        alt="Facility 2"
        className="w-full h-[230px] object-cover rounded-lg shadow-md"
      />
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
<section>
  <ContactPage/>
</section>



    </>
  );
}

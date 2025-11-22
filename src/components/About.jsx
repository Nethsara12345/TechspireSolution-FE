import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0f] text-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6">
          Get to Know Us
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-400">
          Empowering Innovation with Techspire Solutions.
        </p>

        {/* Main About Text */}
        <p className="mt-10 max-w-4xl mx-auto text-gray-300 leading-relaxed text-center">
          At Techspire Solutions, established in <strong>January 2025</strong> and rooted in
          <strong> Kandy, Sri Lanka</strong>, we empower businesses of all scales with
          reliable, tailored IT solutions. From entrepreneurs to enterprises, we
          help you navigate the ever-changing digital landscape with confidence.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          
          {/* Card 1 */}
          <div
            className="bg-[#11111a] p-5 rounded-xl border border-gray-800 
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_20px_rgba(0,150,255,0.4)]"
          >
            <h3 className="font-semibold text-lg mb-2">End-to-end IT</h3>
            <p className="text-gray-400 text-sm">
              Infrastructure, networking, deployment, and ongoing technical support.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#11111a] p-5 rounded-xl border border-gray-800 
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_20px_rgba(0,150,255,0.4)]"
          >
            <h3 className="font-semibold text-lg mb-2">Partnership-first</h3>
            <p className="text-gray-400 text-sm">
              Long-term relationships built on transparency and consistent quality.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#11111a] p-5 rounded-xl border border-gray-800 
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_20px_rgba(0,150,255,0.4)]"
          >
            <h3 className="font-semibold text-lg mb-2">Customer-centric</h3>
            <p className="text-gray-400 text-sm">
              Deep understanding of each client's needs — no one-size-fits-all.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#11111a] p-5 rounded-xl border border-gray-800 
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_20px_rgba(0,150,255,0.4)]"
          >
            <h3 className="font-semibold text-lg mb-2">Driven by Innovation</h3>
            <p className="text-gray-400 text-sm">
              Modern tools and smart strategies to keep your business competitive.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <div
            className="bg-[#11111a] border border-gray-800 p-4 rounded-xl w-36 text-center
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_25px_rgba(0,150,255,0.5)]"
          >
            <div className="text-2xl font-bold">Jan 2025</div>
            <div className="text-xs text-gray-400">Founded</div>
          </div>

          <div
            className="bg-[#11111a] border border-gray-800 p-4 rounded-xl w-36 text-center
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_25px_rgba(0,150,255,0.5)]"
          >
            <div className="text-2xl font-bold">Kandy</div>
            <div className="text-xs text-gray-400">Location</div>
          </div>

          <div
            className="bg-[#11111a] border border-gray-800 p-4 rounded-xl w-36 text-center
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_25px_rgba(0,150,255,0.5)]"
          >
            <div className="text-2xl font-bold">120+</div>
            <div className="text-xs text-gray-400">Clients</div>
          </div>

          <div
            className="bg-[#11111a] border border-gray-800 p-4 rounded-xl w-36 text-center
            transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_0px_25px_rgba(0,150,255,0.5)]"
          >
            <div className="text-2xl font-bold">250+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>

        </div>

      </div>                   
    </section>
  );
};

export default AboutUs;
                                                 
import React from 'react'
import assets from '../assets/assets'

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              About Us
              
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to Techspire Solutions! We are a team of passionate professionals dedicated to 
              delivering innovative technology solutions that drive business growth and success.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With years of experience in the industry, we specialize in web development, UI/UX design, 
              database management, and comprehensive IT services. Our mission is to empower businesses 
              with cutting-edge technology and exceptional support.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At Techspire Solutions, we believe in building long-term partnerships with our clients, 
              understanding their unique needs, and delivering customized solutions that exceed expectations.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img 
              src={assets.about} 
              alt="About Us" 
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs

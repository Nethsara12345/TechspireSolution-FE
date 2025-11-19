import React from 'react'
import assets from '../assets/assets'

const techIcons = [
  assets.icon1,
  assets.icon2,
  assets.icon3,
  assets.icon4,
  assets.icon5,
  assets.icon6,
  assets.icon7,
  assets.icon8,
  assets.icon9,
  assets.icon10,
  assets.icon11,
  assets.icon12,
]

const Technologies = () => {
  return (
    <section className='tech-slider-container py-16 px-4 sm:px-12 lg:px-24 xl:px-40'>
      <h3 className='text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white'>
        Technologies We Use
      </h3>
      <div className='tech-slider'>
        <div className='tech-track'>
          {techIcons.map((icon, idx) => (
            <img src={icon} alt='tech logo' className='tech-logo' key={`first-${idx}`} />
          ))}
          {techIcons.map((icon, idx) => (
            <img src={icon} alt='tech logo' className='tech-logo' key={`second-${idx}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

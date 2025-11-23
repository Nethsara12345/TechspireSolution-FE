import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Build modern, responsive websites and web applications tailored to your business needs.',
    icon: assets.content_icon,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences with beautiful interface designs.',
    icon: assets.marketing_icon,
  },
  {
    id: 3,
    title: 'Database',
    description: 'Design and manage robust database solutions for efficient data storage and retrieval.',
    icon: assets.social_icon,
  },
  {
    id: 4,
    title: 'Networking',
    description: 'Implement secure and scalable network infrastructure for your organization.',
    icon: assets.ads_icon,
  },
  {
    id: 5,
    title: 'Microsoft Services',
    description: 'Leverage Microsoft technologies for enterprise solutions and productivity tools.',
    icon: assets.content_icon,
  },
  {
    id: 6,
    title: 'Graphics Design',
    description: 'Create stunning visual content that captures attention and communicates your brand.',
    icon: assets.marketing_icon,
  },
  {
    id: 7,
    title: 'SEO',
    description: 'Optimize your online presence to rank higher in search engines and attract more traffic.',
    icon: assets.social_icon,
  },
  {
    id: 8,
    title: 'Server Services',
    description: 'Manage and maintain reliable server infrastructure for optimal performance.',
    icon: assets.ads_icon,
  },
  {
    id: 9,
    title: 'Social Media Marketing',
    description: 'Grow your brand presence and engage with audiences across social media platforms.',
    icon: assets.marketing_icon,
  },
]

const Servise = () => {
  const navigate = useNavigate()

  return (
    <section id='services' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'>
      <Title 
        title='Our Services' 
        desc='Comprehensive digital solutions to elevate your business'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/services/${service.id}`)}
            className='bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl 
            transition-all cursor-pointer p-6 border border-gray-200 dark:border-gray-700
            hover:border-primary hover:scale-105 group'
          >
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full 
            bg-primary/10 group-hover:bg-primary transition-colors'>
              <img src={service.icon} alt={service.title} className='w-8 h-8' />
            </div>
            
            <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
              {service.title}
            </h3>
            
            <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
              {service.description}
            </p>

            <div className='mt-4 flex items-center text-primary font-medium text-sm 
            group-hover:gap-2 transition-all'>
              Learn More 
              <img src={assets.arrow_icon} alt='' className='w-3 ml-1 group-hover:ml-2 transition-all' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Servise

import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import assets from '../assets/assets'
import Footer from './Footer'

const servicesData = {
  1: {
    title: 'Web Development',
    description: 'Build modern, responsive websites and web applications tailored to your business needs.',
    details: [
      'Custom website design and development',
      'Responsive and mobile-friendly layouts',
      'E-commerce solutions',
      'Content Management Systems (CMS)',
      'Web application development',
      'API integration and development',
      'Performance optimization',
      'Maintenance and support'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'HTML5', 'CSS3', 'JavaScript']
  },
  2: {
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences with beautiful interface designs.',
    details: [
      'User interface design',
      'User experience research',
      'Wireframing and prototyping',
      'Interactive design mockups',
      'Mobile app design',
      'Design system creation',
      'Usability testing',
      'Brand identity design'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Photoshop', 'Illustrator']
  },
  3: {
    title: 'Database',
    description: 'Design and manage robust database solutions for efficient data storage and retrieval.',
    details: [
      'Database design and architecture',
      'SQL and NoSQL databases',
      'Data migration services',
      'Performance tuning',
      'Backup and recovery solutions',
      'Database security',
      'Cloud database management',
      'Data modeling'
    ],
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server']
  },
  4: {
    title: 'Networking',
    description: 'Implement secure and scalable network infrastructure for your organization.',
    details: [
      'Network design and setup',
      'LAN/WAN configuration',
      'Network security implementation',
      'VPN setup',
      'Firewall configuration',
      'Network monitoring',
      'Troubleshooting and maintenance',
      'Cloud networking'
    ],
    technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'AWS VPC', 'Azure Network']
  },
  5: {
    title: 'Microsoft Services',
    description: 'Leverage Microsoft technologies for enterprise solutions and productivity tools.',
    details: [
      'Microsoft 365 implementation',
      'Azure cloud solutions',
      'SharePoint development',
      'Power Platform solutions',
      'Teams integration',
      '.NET development',
      'SQL Server management',
      'Active Directory services'
    ],
    technologies: ['Azure', 'Microsoft 365', 'SharePoint', 'Power BI', 'Dynamics 365', '.NET']
  },
  6: {
    title: 'Graphics Design',
    description: 'Create stunning visual content that captures attention and communicates your brand.',
    details: [
      'Logo design',
      'Brand identity creation',
      'Marketing materials',
      'Social media graphics',
      'Infographics',
      'Packaging design',
      'Print design',
      'Digital illustrations'
    ],
    technologies: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW', 'Canva']
  },
  7: {
    title: 'SEO',
    description: 'Optimize your online presence to rank higher in search engines and attract more traffic.',
    details: [
      'Keyword research and analysis',
      'On-page SEO optimization',
      'Technical SEO audits',
      'Link building strategies',
      'Content optimization',
      'Local SEO services',
      'SEO reporting and analytics',
      'Competitor analysis'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog']
  },
  8: {
    title: 'Server Services',
    description: 'Manage and maintain reliable server infrastructure for optimal performance.',
    details: [
      'Server setup and configuration',
      'Cloud server management',
      'Server security hardening',
      'Load balancing',
      'Backup solutions',
      'Monitoring and alerts',
      'Performance optimization',
      '24/7 server support'
    ],
    technologies: ['Linux', 'Windows Server', 'AWS', 'Azure', 'Docker', 'Kubernetes']
  },
  9: {
    title: 'Social Media Marketing',
    description: 'Grow your brand presence and engage with audiences across social media platforms.',
    details: [
      'Social media strategy',
      'Content creation and scheduling',
      'Community management',
      'Paid advertising campaigns',
      'Influencer marketing',
      'Analytics and reporting',
      'Brand reputation management',
      'Social media audits'
    ],
    technologies: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok', 'Hootsuite']
  }
}

const ServiseDetails = ({ theme }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const service = servicesData[id]

  if (!service) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-4'>Service Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className='bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-all'
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='min-h-screen px-4 sm:px-12 lg:px-24 xl:px-40 py-20 dark:bg-black'>
        <button 
          onClick={() => navigate('/')}
          className='flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8'
        >
          <img src={assets.arrow_icon} alt='' className='w-4 rotate-180' />
          Back to Services
        </button>

        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4'>
            {service.title}
          </h1>
          
          <p className='text-xl text-gray-600 dark:text-gray-400 mb-12'>
            {service.description}
          </p>

          <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-8'>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
              What We Offer
            </h2>
            
            <ul className='grid sm:grid-cols-2 gap-4'>
              {service.details.map((detail, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0'></div>
                  <span className='text-gray-700 dark:text-gray-300'>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8'>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
              Technologies We Use
            </h2>
            
            <div className='flex flex-wrap gap-3'>
              {service.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='mt-12 text-center'>
            <a 
              href='#contact-us'
              onClick={() => navigate('/')}
              className='inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all'
            >
              Get Started
              <img src={assets.arrow_icon} alt='' className='w-4' />
            </a>
          </div>
        </div>
      </div>
      
      <Footer theme={theme} />
    </>
  )
}

export default ServiseDetails

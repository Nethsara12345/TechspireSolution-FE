import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className='text-center'>
      <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white'>
        {title}
      </h2>
      <p className='text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto'>
        {desc}
      </p>
    </div>
  )
}

export default Title

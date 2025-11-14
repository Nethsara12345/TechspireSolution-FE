import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "419cc0ee-2acd-444d-a6ad-3f406204ab43");

    try {
          const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Thank you for your submission!");
          event.target.reset();
        } else { 
          toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for your submission!");
      event.target.reset();
    } else { 
      toast.error(data.message);
    }

  }

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-24 text-gray-700 dark:text-white'>
        <Title title='Reach Out to Us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

         <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl w-full'>

          <div>
              <p className='mb-2 text-sm font-medium'>Your name</p>
              <div className='flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.person_icon} alt="" className='w-5'/>
                <input name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none bg-transparent' required/>
              </div>
          </div>

          <div>
              <p className='mb-2 text-sm font-medium'>Email</p>
              <div className='flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.email_icon} alt="" className='w-5'/>
                <input name="email" type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none bg-transparent' required/>
              </div>
          </div>

           <div className='sm:col-span-2'>
              <p className='mb-2 text-sm font-medium'>Message</p>
              <textarea name="message" rows={6} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent' required/>
          </div>

          <button type='submit' className='flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'>
            Submit <img src={assets.arrow_icon} alt='' className='w-4'/>
          </button>
        </form> 
      
    </div>
  )
}

export default ContactUs

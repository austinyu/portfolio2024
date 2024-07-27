import React from 'react'

import { LightBulbIcon, KeyIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const FormEntry = ({ name, type, label, placeholder, short }) => {
  const testStyle = `
    bg-[#181818] 
    border border-[#33353F] 
    placeholder:[#9CA2A9] text-red-100 text-sm 
    rounded-lg block w-full p-2.5`;
  return (
    <div className='mb-4'>
      <label
        htmlFor={name}
        type={type}
        className='text-white block mb-2 text-sm font-medium'
      >
        {label}
      </label>
      {short
        ? <input 
          type={type}
          id={name}
          required 
          className={testStyle}
          placeholder={placeholder ? placeholder : ''} 
        />
        : <textarea 
          name="message" 
          id="message" 
          className='
            bg-[#181818] 
            border border-[#33353F] 
            placeholder:[#9CA2A9] text-red-100 text-sm 
            rounded-lg block w-full p-2.5'
          placeholder={placeholder ? placeholder : ''}
        />
      }
    </div>
  )
}

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
        from-secondary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg
        absolute top-3/4 transform -translate-x-1.2 -translate-y-1/2
      '></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let's Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Qui optio quas eveniet vel debitis molestias odio laboriosam,
          dignissimos veritatis saepe molestiae culpa sunt voluptas in.
          Praesentium porro aspernatur enim accusantium?
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="github.com">
            <LightBulbIcon className='h-6 w-6 text-[#ADB7BE]' />
          </Link>
          <Link href="linkedin.com">
            <KeyIcon className='h-6 w-6 text-[#ADB7BE]' />
          </Link>
        </div>
      </div>
      <div className='z-10'>
        <form className='flex flex-col gap' action="">
          <FormEntry name='email' type='email' label='Your Email'
            placeholder='jacom@google.com' short={true} />
          <FormEntry name='subject' type='text' label='Subject'
            placeholder='Just saying hi'short={true} />
          <FormEntry name='message' type='message' label='Message'
            placeholder="Let's Talk about ..."short={false} />
          <button
            type='submit'
            className='
              bg-secondary-500 hover:bg-secondary-600 text-white 
              font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
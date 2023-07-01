import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row md:flex-row p-2.5 gap-2.5 mt-16'>
        <div className='flex flex-col lg:w-1/3 md:1/3 w-full lg:p-5 md:p-5 p-2.5 gap-5 '>
            <Image src={"/Logo.png"} width={200} height={100} alt='Logo' />
            <p className='text-lg'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
        </div>
        <div className='flex flex-col lg:px-10 md:px-10 lg:flex-row md:flex-row p-2.5 justify-between text-lg space-between lg:w-2/3 md:2/3 w-full'>
            <div className='mb-5'>
                <p className='text-bold'>Company</p>
                <p>About</p>
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className='mb-5'>
                <p className='text-bold'>Support</p>
                <p>Support Center</p>
                <p>24/7 Service</p>
                <p>Quick Chat</p>
            </div>
            <div className='mb-5'>
                <p className='text-bold'>Social</p>
                <p>Whatsapp</p>
                <p>Facebook</p>
                <p>Linkedin</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
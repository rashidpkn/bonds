import React from 'react'

export default function ContactUs() {
  return (
    <>
    <div className=' bg-cover bg-top relative' style={{backgroundImage:'url(https://bondmarketquotes.com/wp-content/uploads/2022/05/slid2.jpg)'}}>
        <div className="flex flex-col gap-5 justify-center items-center w-full min-h-[500px] bg-black/40 text-white text-center">
          <h1 className='text-2xl lg:text-5xl'>Contact Us</h1>
        </div>
    </div>

    <div className="container px-[10%] mx-auto my-10 grid grid-cols-2 gap-20">
        <div className="space-y-10">
            <div className=" space-y-5">
            <h2 className='text-xl lg:text-4xl text-black font-medium'>Send Us a Message</h2>
            <p className='text-black/60'>Fill out the form below to contact us. We will get back to you as soon as we can.</p>
            </div>
            <form action="" className='grid grid-cols-2 gap-10'>
                <input type="text" className='w-full border-b px-5 outline-none py-2' placeholder='Your Name'/>
                <input type="text" className='w-full border-b px-5 outline-none py-2'  placeholder='Your Email'/>
                <input type="text" className='w-full border-b px-5 outline-none py-2 col-span-2'  placeholder='Your Phonr Number'/>
                <textarea type="text" className='w-full border-b p-5 outline-none col-span-2'  rows={5} placeholder='Your Message'/>
                <button className='border w-36 py-4 rounded-xl bg-[#15b1db] text-white text-xl font-medium'>Send Now</button>
            </form>

        </div>
        <div className="">
        
        </div>
    </div>

    </>
  )
}

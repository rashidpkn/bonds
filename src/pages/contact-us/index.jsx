
export default function ContactUs() {
  return (
    <>
    <div className=' bg-cover bg-bottomD relative' style={{backgroundImage:'url(/img/album/contact2.jpg)'}}>
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
                <button className='border w-36 py-4 rounded-xl bg-[#133269] text-white text-xl font-medium'>Send Now</button>
            </form>

        </div>
        <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5564811601635!2d-0.08233002301556562!3d51.52135240968345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb1990d6d4d%3A0x8f2bd1e8db41ad8e!2s20%20Primrose%20St%2C%20London%20EC2A%202EW%2C%20UK!5e0!3m2!1sen!2sus!4v1719550362212!5m2!1sen!2sus" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    </>
  )
}

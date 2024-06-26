import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../../router/path'

export default function Hero() {
  return (
    <section className='h-[75vh] font-lato bg-no-repeat bg-cover bg-right'  style={{backgroundImage:'url(/img/home/bg.jpg)'}}>
            <div className="container mx-auto h-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-left">
                    <p className='px-4 py-2 bg-white text-lg font-bold '>WELCOME TO</p>
                    <h1 className='text-5xl font-bold text-white'>Bond  Quotes</h1>
                    <p className='text-lg text-white'>The best place to find the information on the highest yielding bonds on <br /> global markets.</p>
                    <Link to={path.whyChooseBonds} className='px-6 py-3 bg-[#52bce8]  text-black rounded-lg' title='Why Choose Us' aria-label='Why Choose Us'>
                            Why Choose Bonds
                    </Link>
            </div>
    </section>
  )
}

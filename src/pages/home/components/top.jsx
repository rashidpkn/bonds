import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../../router/path'

export default function Top() {
  return (
    <section className='container mx-auto text-center lg:text-left'>
        <div className="grid lg:grid-cols-2 gap-5 pt-[5%] px-5">
            <img src="https://bondmarketquotes.com/wp-content/uploads/2022/05/ser2.jpg" className='rounded-lg' alt="Our Top UK Picks" />
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top UK Picks</h3>
                <p className='text-[#756e85]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ipsam soluta blanditiis veniam libero nisi in nobis officiis at quis quasi error distinctio, minus, atque, delectus omnis unde tempore rerum.</p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top Australian Picks</h3>
                <p className='text-[#756e85]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ipsam soluta blanditiis veniam libero nisi in nobis officiis at quis quasi error distinctio, minus, atque, delectus omnis unde tempore rerum.</p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>
            <img src="https://bondmarketquotes.com/wp-content/uploads/2022/07/aus-1.jpg" className='rounded-lg' alt="Our Top Australian Picks" />


            <img src="https://bondmarketquotes.com/wp-content/uploads/2022/07/ca-1.jpg" className='rounded-lg' alt="Our Top Canadian Picks" />
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top Canadian Picks</h3>
                <p className='text-[#756e85]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ipsam soluta blanditiis veniam libero nisi in nobis officiis at quis quasi error distinctio, minus, atque, delectus omnis unde tempore rerum.</p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top European Picks</h3>
                <p className='text-[#756e85]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ipsam soluta blanditiis veniam libero nisi in nobis officiis at quis quasi error distinctio, minus, atque, delectus omnis unde tempore rerum.</p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>
            <img src="https://bondmarketquotes.com/wp-content/uploads/2022/05/ser1.jpg" className='rounded-lg' alt="Our Top European Picks" />


        </div>
    </section>
  )
}

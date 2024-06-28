import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { path } from '../../router/path';

export default function Header() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 200;
          setScrolled(isScrolled)
        
        };
    
        window.addEventListener('scroll', handleScroll);
    
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (

    <header className={`sticky top-0 z-10   font-lato duration-500 ${!scrolled ? 'bg-transparent text-[#eee]' : 'bg-white text-black'}`}>
        <div className="container mx-auto p-5 flex justify-between items-center">

        <div className="logo">
            <img src={!scrolled ? '/logo/white.png' : '/logo/bondlogo2.png'} className='w-[100px]'  alt="" />
        </div>
        <nav>
            <ul className='flex gap-10 font-semibold'>

                <li><Link to={'/'} className='cursor-pointer underline leading-loose'>Home</Link></li>
                <li><Link to={path.whyChooseBonds} className='cursor-pointer underline leading-loose'>Why Choose Bonds?</Link></li>
                <li><Link to={'/'} className='cursor-pointer underline leading-loose'>Markets </Link></li>
                <li><Link to={path.topNational} className='cursor-pointer underline leading-loose'>Top National Picks </Link></li>
                <li><Link to={path.contactUs} className='cursor-pointer underline leading-loose'>Contact Us</Link></li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

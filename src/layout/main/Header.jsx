import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { path } from '../../router/path';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Header() {
  const [menu, setMenu] = useState(false)
  const {  } = useLocation()
  const [] = useState("")

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
            <img src={!scrolled ? '/logo/whitelogo.png' : '/logo/bluelogo.png'} className='w-[100px]'  alt="" />
        </div>
        <nav className=''>
            <ul className='hidden lg:flex gap-10 text font-semibold '>

                <li><Link to={'/'} className='cursor-pointer underline leading-loose'>Home</Link></li>
                <li><Link to={path.whyChooseBonds} className='cursor-pointer underline leading-loose'>Why Choose Bonds?</Link></li>
                {/* <li><Link to={path.bond1} className='cursor-pointer underline leading-loose'>bond1</Link></li> */}

                {/* <li><Link to={'/'} className='cursor-pointer underline leading-loose'>Markets </Link></li> */}
                <div className="relative group ">
              <NavLink  className='cursor-pointer underline leading-loose'>Markets</NavLink>
              
            <div className={`absolute border  font-thin text-base p-6 space-y-5 text-white w-[290px]  hidden group-hover:flex flex-col   -left-[140px]  `}>
            <li className="text-[20px] font-medium   hover:text-[#133269] text-white "><NavLink to={path.toUK} >Our Top UK Picks</NavLink></li>
            <hr className="w-[230px]" />
            <li className="text-[20px] font-medium   hover:text-[#133269] text-white"><NavLink  to={path.topAustralian}>Our Top Australian Picks            </NavLink></li>
            <hr className="w-[230px]" />
            <li className="text-[20px] font-medium   hover:text-[#133269] text-white"><NavLink to={path.topCanadian} >Our Top Canadian Picks            </NavLink></li>
            <hr className="w-[230px]" />
            <li className="text-[20px] font-medium   hover:text-[#133269] text-white"><NavLink  to={path.topEuropean}>Our Top European Picks            </NavLink></li>

            </div>
            </div>
                {/* <li><Link to={path.topNational} className='cursor-pointer underline leading-loose'>Top National Picks </Link></li> */}
                <li><Link to={path.contactUs} className='cursor-pointer underline leading-loose'>Contact Us</Link></li>
            </ul>
            <div className="flex lg:hidden z-10">
            <Icon icon={!menu ? 'pajamas:hamburger' : 'eva:close-fill'} onClick={() => { setMenu(prev => !prev) }} className=' z-10 text-2xl' />
          </div>
        </nav>
        {<div className={`fixed h-screen  ${menu ? 'w-full' : 'w-0'} duration-500 bg-black/50 top-0 left-0 flex overflow-hidden`}>


<ul className={` ${menu ? 'w-1/2' : 'w-0'} duration-200 
 p-3 flex flex-col overflow-hidden bg-primary text-white space-y-7 `}>
  <li className="text-[20px] font-medium  border p-4  "><NavLink onClick={()=>setMenu(false)} to={'/'}>Home</NavLink></li>
  <li className="text-[20px] font-medium  border p-4  "><NavLink onClick={()=>setMenu(false)} to={path.toUK}>Our Top UK Picks</NavLink></li>
  <li className="text-[20px] font-medium  border p-4  "><NavLink onClick={()=>setMenu(false)} to={path.topAustralian} >Our Top Australian Picks  </NavLink></li>
  <li className="text-[20px] font-medium  border p-4  "><NavLink onClick={()=>setMenu(false)} to={path.topCanadian} >Our Top Canadian Picks   </NavLink></li>
  <li className="text-[20px] font-medium  border p-4  "><NavLink onClick={()=>setMenu(false)} to={path.topEuropean} >Our Top European Picks </NavLink></li>


</ul>

</div>}
        </div>
    </header>
  )
}

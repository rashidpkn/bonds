import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../router/path'

export default function Footer() {
  return (
    
    <div className='  bg-[#071d49] font-lato pt-5 text-[#999]'>
            <div className="container mx-auto grid lg:grid-cols-4 px-[5%] gap-5 text-center lg:text-left">
                <div className="flex flex-col gap-2">
                    <h4 className='text-white text-xl font-bold'>About Bond Market Quotes</h4>
                    <p>A software company based in London, Bond Market Quotes specializes in software development.</p>
                    <p>We aim to provide the latest available information for investors.</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className='text-white text-xl font-bold'>Quick Links</h4>
                    <Link to={path.root}>  Home</Link>
                    <Link to={path.whyChooseBonds}> Why Choose Us</Link>
                    <Link to={path.contactUs}> Contact Us</Link>
                </div>

                <div className="flex flex-col gap-1">
                    <h4 className='text-white text-xl font-bold'>Markets</h4>
                    <Link to={path.toUK}>  Our Top UK Picks</Link>
                    <Link to={path.topAustralian}>  Our Top Australian Picks</Link>
                    <Link to={path.topCanadian}>  Our Top Canadian Picks</Link>
                    <Link to={path.topEuropean}>  Our Top European Picks</Link>
                </div>

                <div className="flex flex-col gap-1">
                    <h4 className='text-white text-xl font-bold'>Contact Details</h4>
                    <a href="mailto:info@bondmarketquotes.com"> info@bondmarketquotes.com</a>
                    <p> Floor 7, 8 Devonshire Square, London EC2M 4PL, UK</p>
                </div>

            </div>

            <div className="container mx-auto my-5 text-center px-[10%]">
                <p>Information provided on this website is for general information only and should not be regarded as constituting an offer or a solicitation to buy or sell any securities, or as investment or tax advice. If you are in any doubt as to the suitability of the products for your circumstances, please seek advice from a regulated advisor.</p>
            </div>

            <hr />

            <p className='text-center py-5'>© 2024 Bond Market Quotes. All Rights Reserved</p>

    </div>
  )
}

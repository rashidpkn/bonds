import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../../router/path'

export default function Top() {
  return (
    <section className='container mx-auto text-center lg:text-left'>
        <div className="grid lg:grid-cols-2 gap-5 pt-[5%] px-5">
            <img src="/img/album/uk.jpg" className='rounded-lg h-[500px] w-full object-cover object-bottom' alt="Our Top UK Picks" />
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top UK Picks</h3>
                <p className='text-[#756e85]'>This list is designed to keep investors up to date with the highest yielding bonds available on the UK market. All bonds have been carefully selected based on the yield and security of the issuer. To see the list, please click on the link below.</p>
                <Link to={path.toUK} className='px-6 py-3 bg-[#133269] rounded-lg text-white'>View All</Link>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top Australian Picks</h3>
                <p className='text-[#756e85]'>All bonds on this list are traded in Australian Dollars. The list is based on the highest yielding options which include Australian Government bonds as well as other major institutions. To see the list, please click on the link below.</p>
                <Link to={path.topAustralian} className='px-6 py-3 bg-[#133269] rounded-lg text-white'>View All</Link>
            </div>
            <img src="/img/album/Australian.jpg" className='rounded-lg h-[500px] w-full object-cover' alt="Our Top Australian Picks  " />


            <img src="/img/album/Canadian.jpg" className='rounded-lg h-[500px] w-full object-cover' alt="Our Top Canadian Picks" />
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top Canadian Picks</h3>
                <p className='text-[#756e85]'>This list provides data on the highest yielding bonds on the Canadian market. All bonds included are either Canadian Government bonds or bonds with major institutions. They have been carefully selected based on the yield and security of the issuer.
</p>
                <Link to={path.topCanadian} className='px-6 py-3 bg-[#133269] rounded-lg text-white'>View All</Link>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h3 className='text-3xl'>Our Top European Picks</h3>
                <p className='text-[#756e85]'>This list provides data on the highest yielding bonds on the European market. All bonds included are either  Government bonds or bonds with major institutions. They have been carefully selected based on the yield and security of the issuer.</p>
                <Link to={path.topEuropean} className='px-6 py-3 bg-[#133269] rounded-lg text-white'>View All</Link>
            </div>
            <img src="/img/album/European.jpg" className='rounded-lg h-[500px] w-full object-cover' alt="Our Top European Picks" />


        </div>
    </section>
  )
}

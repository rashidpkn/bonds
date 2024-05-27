import React from 'react'
import { canadianBonds } from '../../data/bonds'
import { BondRow } from '../../shared/BondRows'

export default function TopCanadian() {
  return (
    <>

<div className=' bg-cover bg-top relative' style={{backgroundImage:'url(https://bondmarketquotes.com/wp-content/uploads/2022/05/slid2.jpg)'}}>
        <div className="flex flex-col gap-5 justify-center items-center w-full min-h-[500px] bg-black/40 text-white text-center">
          <h1 className='text-2xl lg:text-5xl'>Our Top Canadian Picks</h1>
        </div>
    </div>

    <div className="my-10 text-center space-y-10 container mx-auto px-[5%]">
    <h2 className='text-2xl lg:text-5xl'>Our Top Canadian Picks</h2>
        <p className='text-black/60 '>This list is designed to keep investors up to date with the highest yielding bonds available on the Canadian market. All bonds have been carefully selected based on the yield and security of the issuer.</p>
        <div className="overflow-x-auto ">

            <table className=' border-collapse mx-auto whitespace-nowrap'>
                <thead>
                    <tr className='border'>
                        <th align='center' className='border px-2 py-5'>Issuer Name</th>
                        <th align='center' className='border px-2 py-5'>Annual Coupon <br /> Rate (% p.a)</th>
                        <th align='center' className='border px-2 py-5'>ISIN</th>
                        <th align='center' className='border px-2 py-5'>Coupon Frequency</th>
                        <th align='center' className='border px-2 py-5'>Coupon Type</th>
                        <th align='center' className='border px-2 py-5'>Issue Date</th>
                        <th align='center' className='border px-2 py-5'>Maturity Date</th>
                    </tr>
                </thead>
                <tbody>

                    {canadianBonds.map(bond=><BondRow key={bond.issuerName}   bond={bond} />)}
                    
                </tbody>
            </table>
        </div>
    </div>
    </>
    
  )
}

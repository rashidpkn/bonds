import React, { useState } from 'react'
import bonds from '../../../data/bonds'

export default function Search() {
  const [name, setName] = useState('')
  const [bond, setBond] = useState({})
  return (
    <section className='bg-[#f4f4f4] pb-5'>
            <div className="container mx-auto flex flex-col justify-center items-center gap-5 px-[10%] py-[5%]">
                    <h2 className='text-4xl font-medium text-[#444444] text-center'>SEARCH MARKET BONDS</h2>
                    <div className="grid grid-cols-10 gap-2 w-full lg:px-[10%] ">
                        <input type="text" placeholder='Search By Issuer Name or ISIN Number'  className='col-span-full lg:col-span-8 h-12 px-5 bg-[#eaeaea] rounded-md'  value={name} onChange={e=>setName(e.target.value)}/>
                        <button className='col-span-full lg:col-span-2 bg-[#52bce8] text-black font-medium rounded-md py-3'
                        onClick={()=>{
                          const bond =   bonds.find(b=>b.isin.toLowerCase().includes(name.toLowerCase()) || b.issuerName.toLowerCase().includes(name.toLowerCase()))
                         if(!name){ 
                          setBond({})
                        }
                          else{
                        setBond(bond)
                        }

                        }}
                        >Search</button>
                    </div>
            </div>
            {bond?.isin && <>
            <table className='max-w-4xl w-full mx-auto px-[5%] border bg-white' >
                <tr className='border '>
                  <td colSpan={2} className='py-2 px-5'>
                    <p className='font-semibold'>Characteristics for {bond.isin}</p>
                  </td>
                </tr>
                <tr className='border '>
                  <td  width={300} className='py-2 px-5 border'>Issuer Name</td>
                  <td className='py-2 px-5 border'>{bond.issuerName}</td>
                </tr>
                <tr className='border '>
                  <td width={300} className='py-2 px-5 border'>Annual Coupon Rate (% p.a)</td>
                  <td className='py-2 px-5 border'>{bond.annualCouponRate}</td>
                </tr>
                <tr className='border '>
                  <td width={300} className='py-2 px-5 border'>ISIN</td>
                  <td className='py-2 px-5 border'>{bond.isin}</td>
                </tr>
                <tr className='border '>
                  <td width={300} className='py-2 px-5 border'>Coupon Frequency</td>
                  <td className='py-2 px-5 border'>{bond.frequency}</td>
                </tr>
                <tr className='border '>
                  <td width={300} className='py-2 px-5 border'>Coupon Type</td>
                  <td className='py-2 px-5 border'>{bond.type}</td>
                </tr>
                <tr className='border '>
                  <td width={300} className='py-2 px-5 border'>Issue Date</td>
                  <td className='py-2 px-5 border'>{bond.issueDate}</td>
                </tr>
                <tr className='border '>
                  <td width={300} className='py-2 px-5 border'>Maturity Date</td>
                  <td className='py-2 px-5 border'>{bond.maturityDate}</td>
                </tr>
            </table>
            </>}
    </section>
  )
}

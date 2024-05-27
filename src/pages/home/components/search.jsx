import React from 'react'

export default function Search() {
  return (
    <section className='bg-[#f4f4f4]'>
            <div className="container mx-auto flex flex-col justify-center items-center gap-5 px-[10%] py-[5%]">
                    <h2 className='text-4xl font-medium text-[#444444] text-center'>SEARCH MARKET BONDS</h2>
                    <div className="grid grid-cols-10 gap-2 w-full lg:px-[10%] ">
                        
                        <input type="text" placeholder='Search By Issuer Name or ISIN Number'  className='col-span-full lg:col-span-8 h-12 px-5 bg-[#eaeaea] rounded-md' />
                        <button className='col-span-full lg:col-span-2 bg-[#071d49] text-white font-medium rounded-md py-3'>Search</button>
                        
                    </div>
            </div>
    </section>
  )
}

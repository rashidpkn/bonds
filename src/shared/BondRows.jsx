import { useState } from "react"
import { Link } from "react-router-dom"

export const BondRow=({bond}) =>{

    const [amount, setAmount] = useState(0)

    const [open, setOpen] = useState(false)

    return(
        <>
        <tr className='border cursor-pointer hover:bg-blue-950 hover:text-white duration-500' onClick={()=>setOpen(prev=>!prev)}>
                        <td align='left' className='border px-2 py-3'>{bond.issuerName}</td>
                        <td align='center' className='border px-2 py-3'>{bond.annualCouponRate}%</td>
                        <td align='center' className='border px-2 py-3'>
                            <Link to={`/bond/${bond.isin}`} title={`${bond.issuerName} bond`}>
                                {bond.isin}
                            </Link>
                            </td>
                        <td align='center' className='border px-2 py-3'>{bond.frequency}</td>
                        <td align='center' className='border px-2 py-3'>{bond.type}</td>
                        <td align='center' className='border px-2 py-3'>{bond.issueDate}</td>
                        <td align='center' className='border px-2 py-3'>{bond.maturityDate}</td>
                    </tr>
                  {  open &&<tr className='w-full border'>
                        <td className='p-5 space-y-3 text-sm' align='left' colSpan={7}>
                                    <div className="flex gap-2">
                                        <p className='w-56 font-medium'>Issuer Name</p>
                                        <p>:</p>
                                        <p>{bond.issuerName}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className='w-56 font-medium'>Annual Coupon Rate (% p.a)</p>
                                        <p>:</p>
                                        <p>{bond.annualCouponRate}%</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className='w-56 font-medium'>ISIN</p>
                                        <p>:</p>
                                        <p>{bond.isin}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className='w-56 font-medium'>Coupon Frequency</p>
                                        <p>:</p>
                                        <p>{bond.frequency}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className='w-56 font-medium'>Coupon Type</p>
                                        <p>:</p>
                                        <p>{bond.type}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className='w-56 font-medium'>Issue Date</p>
                                        <p>:</p>
                                        <p>{bond.issueDate}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className='w-56 font-medium'>Maturity Date</p>
                                        <p>:</p>
                                        <p>{bond.maturityDate}</p>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor=""> Investment Amount</label>
                                            <input type="number" value={amount} onChange={e=>setAmount(parseFloat(e.target.value))} className='h-14 w-40 border px-5' placeholder='Amount' min={0}/>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="">Yield</label>
                                            <input type="text" className='h-14 w-40 border px-5'  disabled value={bond.annualCouponRate}/>
                                        </div>
                                        {/* <button className="border h-14 mt-5 px-5 text-2xl rounded-2xl">
                                           Calculate
                                        </button> */}
                                       {!!amount && <div className="flex justify-center items-center mt-5 text-2xl">
                                             &euro; {(amount* bond.annualCouponRate/100).toFixed(2)} per annum
                                       </div>}
                                    </div>
                        </td>
                    </tr>}
        </>
    )
}
import  { useState } from "react";

export default function Bond1() {
    const [amount, setAmount] = useState(0)

    const [bond, setOpen] = useState(false)
  return (
    <section className=" h-[550px]">
         
        <tr className="flex justify-center items-center py-[8%]"onClick={()=>setOpen(prev=>!prev)}>
        <td className="p-5 space-y-3 text-sm" align="left" colspan="7">
          <div className="flex gap-2">
            <p className="w-56 font-medium">Issuer Name</p>
            <p>:</p>
            <p>Barclays</p>
          </div>
          <div className="flex gap-2">
            <p className="w-56 font-medium">Annual Coupon Rate (% p.a)</p>
            <p>:</p>
            <p>7.5%</p>
          </div>
          <div className="flex gap-2">
            <p className="w-56 font-medium">ISIN</p>
            <p>:</p>
            <p>IT0006712142</p>
          </div>
          <div className="flex gap-2">
            <p className="w-56 font-medium">Coupon Frequency</p>
            <p>:</p>
            <p>Quarterly</p>
          </div>
          <div className="flex gap-2">
            <p className="w-56 font-medium">Coupon Type</p>
            <p>:</p>
            <p>Fixed</p>
          </div>
          <div className="flex gap-2">
            <p className="w-56 font-medium">Issue Date</p>
            <p>:</p>
            <p>29th January 2010</p>
          </div>
          <div className="flex gap-2">
            <p className="w-56 font-medium">Maturity Date</p>
            <p>:</p>
            <p>29th January 2025</p>
          </div>
          <div className="flex gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor=""> Investment Amount</label>
                                            <input type="number" value={amount} onChange={e=>setAmount(parseFloat(e.target.value))} className='h-14 w-40 border px-5' placeholder='Amount' min={0}/>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="">Yield</label>
                                            <input type="text" className="h-14 w-40 border px-5" disabled="" value="7.5" />
                                        </div>
                                      
                                       {!!amount && <div className="flex justify-center items-center mt-5 text-2xl">
                                             &euro; {(amount* bond.annualCouponRate/100).toFixed(2)} per annum
                                       </div>}
                                    </div>
        </td>
      </tr>
    </section>
  );
}

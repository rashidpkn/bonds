import React, { useState } from "react";
import bonds from "../../data/bonds";
import { useParams } from "react-router-dom";

export default function Bond() {
  const { isin } = useParams();
  const bond = bonds.find((bond) => bond.isin === isin);
  const [amount, setAmount] = useState(0)
  return (
    <div className="mt-20 min-h-screen flex justify-center items-center px-5">
      {!bond && (
        <div className="text-center space-y-5">
          <h1 className="text-2xl">Apologies, This Bond is Not Listed</h1>
          <p>
            We apologize, but this particular bond is not included in our list.
          </p>
        </div>
      )}
      {bond && (
        <div className=" max-w-2xl w-full p-5 border mx-auto text-black border-black space-y-5">
          <div className="flex justify-between items-center">
            <p className="w-[45%]">Issuer Name</p> :{" "}
            <p className="w-[45%]">{bond.issuerName}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[45%]">Annual Coupon Rate (% p.a)</p> :{" "}
            <p className="w-[45%]">{bond.annualCouponRate}%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[45%]">ISIN</p> : <p className="w-[45%]">{isin}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[45%]">Coupon Frequency</p> :{" "}
            <p className="w-[45%]">{bond.frequency}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[45%]">Coupon Type</p> :{" "}
            <p className="w-[45%]">{bond.type}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[45%]">Issue Date</p> :{" "}
            <p className="w-[45%]">{bond.issueDate}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[45%]">Maturity Date</p> :{" "}
            <p className="w-[45%]">{bond.maturityDate}</p>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor=""> Investment Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="h-14 w-40 border px-5"
                placeholder="Amount"
                min={0}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Yield</label>
              <input
                type="text"
                className="h-14 w-40 border px-5"
                disabled
                value={bond.annualCouponRate}
              />
            </div>
       
            {!!amount && (
              <div className="flex justify-center items-center mt-5">
                &euro; {((amount * bond.annualCouponRate) / 100).toFixed(2)} per
                annum
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

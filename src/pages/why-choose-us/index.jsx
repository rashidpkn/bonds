import React from 'react'

export default function WhyChooseUs() {
  return (
    <>
    <div className=' bg-cover bg-center relative' style={{backgroundImage:'url(/img/home/bg.jpg)'}}>
        <div className="flex flex-col gap-5 justify-center items-center w-full min-h-[500px] bg-black/40 text-white text-center">
          <h1 className='text-2xl lg:text-5xl'>Why Choose Us</h1>
          <p className='lg:text-2xl font-light px-[5%] '>Investors buy bonds because: They provide a predictable income stream. Typically, bonds pay interest twice a year. If the bonds are held to maturity, bondholders get back the entire principal, so bonds are a way to preserve capital while investing.</p>
        </div>
    </div>


    <div className="mt-5 container px-[5%] mx-auto">
      <div className="grid grid-cols-2 gap-5">
        <div className="p-5 space-y-10 text-black/60">
          <h2 className='text-xl lg:text-4xl text-black font-medium'>Bonds Provide Income</h2>
          <p>While many investments provide some form of income, bonds tend to offer the highest and most stable cash streams. Even at times when rates are low, there are still plenty of options you can use to build a portfolio that meets your income needs.</p>
          <p>Most importantly, a strong bond portfolio can provide decent yields with a lower level of volatility than equities. They also can make more income than money market funds or bank instruments. This all means that bonds are a good option for those want to achieve a good income with zero to minimal risk.</p>

        </div>
        <div className="">
          <img className='w-full h-[500px] object-cover object-bottom' src="/img/home/uk.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className="container px-[5%] mt-20 space-y-10 text-black/60 mx-auto">
      <div className="space-y-5">
        <h3 className='text-xl lg:text-4xl text-black font-medium'>Bonds Offer Diversification</h3>
        <p>Almost everyone has heard the phrase “Don’t put all your eggs in one basket.” This is very true for investors. It may be a cliché, but it’s wisdom that has stood the test of time. As time goes on, greater diversification can provide you with better risk-adjusted returns than narrow portfolios can. In other words, it reduces the amount of return relative to the risk.</p>
        <p>More importantly, bonds can help preserve capital for equity investors during times when the stock market is falling.</p>
      </div>
      <div className="space-y-5">
        <h3 className='text-xl lg:text-4xl text-black font-medium'>Bonds Preserve Principal</h3>
        <p>Fixed income investments are very useful for people nearing the point where they will need to use the cash they have invested. For instance, this could apply to someone who is within five years of retirement or a parent whose child is starting college. Stocks can face huge levels of volatility in a brief period, such as the crash of 2001 and 2002 or the financial crisis of 2008 and 2009, but a diversified bond portfolio is much less likely to suffer large losses short-term.</p>
        <p>As a result, it may be a good idea to increase your allocation to fixed income and decrease your allocation to equities as you move closer to your goals.</p>
        <p>Bonds don’t make for interesting conversation at dinner parties, and they don’t receive proportionate coverage in the financial press relative to stocks, but they can serve a wide range of uses for investors of all backgrounds.</p>
      </div>
    </div>

    </>
  )
}

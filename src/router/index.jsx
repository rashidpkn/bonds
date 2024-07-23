import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { path } from './path'
import Home from '../pages/home'
import WhyChooseUs from '../pages/why-choose-us'
import MainLayout from '../layout/main'
import ContactUs from '../pages/contact-us'
import TopUK from '../pages/top-uk'
import TopAustralian from '../pages/top-australian'
import TopCanadian from '../pages/top-canadian'
import TopEuropean from '../pages/top-european'
import TopNational from '../pages/top-national'
import Bond from '../pages/bond'

export default function Router() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smoothly scrolls to the top
    });
  }, [location.pathname]);



  return (
    <Routes>
      <Route path={path.root} element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path={path.whyChooseBonds} element={<WhyChooseUs/>} />
        <Route path={path.contactUs} element={<ContactUs/>} />
        <Route path={path.toUK} element={<TopUK/>} />
        <Route path={path.topAustralian} element={<TopAustralian/>} />
        <Route path={path.topCanadian} element={<TopCanadian/>} />
        <Route path={path.topEuropean} element={<TopEuropean/>} />
        <Route path={path.topNational} element={<TopNational/>} />
        <Route path={path.bond} element={<Bond/>} />

      </Route>
    </Routes>
  )
}

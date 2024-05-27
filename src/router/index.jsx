import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { path } from './path'
import Home from '../pages/home'
import WhyChooseUs from '../pages/why-choose-us'
import MainLayout from '../layout/main'
import ContactUs from '../pages/contact-us'
import TopUK from '../pages/top-uk'
import TopAustralian from '../pages/top-australian'
import TopCanadian from '../pages/top-canadian'
import TopEuropean from '../pages/top-european'

export default function Router() {
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
        
      </Route>
    </Routes>
  )
}

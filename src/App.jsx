import React from 'react'
import { Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <Routes>
      <Route path='/' element={''}>
        <Route index element={'Home'} />
      </Route>
    </Routes>
  )
}

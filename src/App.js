import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';


function App() {
  const authState = useSelector(state => state.auth)
  const dispatch = useDispatch()

  console.log(authState)


  return (
    <div className='bg-blue-900 h-screen w-screen' >
      <NavBar />
      <main>
        <Routes>

          <Route path='/' element={
            <h1>Hello</h1>
          } />
          {/* <Route path='/auth' element={<Auth />} /> */}

          {/* <Route path='/places' element={<AllPlaces />} /> */}
        </Routes>
      </main>

    </div>
  );
}

export default App;

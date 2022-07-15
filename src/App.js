import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Users from './pages/Users';
import Auth from './pages/Auth';
import AddPlace from './pages/AddPlace';
import AllPlaces from './pages/AllPlaces';

function App() {
  const [token, setToken] = useState(false)
  const tokenState = useSelector(state => state.auth.isToken)
  const userLogin = useSelector((state) => state.auth.userLogin);

  // console.log(tokenState)

  return (
    <div className='bg-blue-900 h-screen w-screen' >
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/auth' element={<Auth />} />
          {userLogin && <Route path='/newplace' element={<AddPlace />} />}
          <Route path='/places' element={<AllPlaces />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;

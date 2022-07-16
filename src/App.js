import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import AllProducts from './pages/AllProducts';


function App() {
  return (
    <div className='bg-blue-900 h-screen w-screen' >
      <NavBar />
      <main>
        <Routes>

          <Route path='/' element={<AllProducts />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;

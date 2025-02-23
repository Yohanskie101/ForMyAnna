import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Flowerpage from './pages/Flowerpage'

const App = () => {
  return (
  <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/flower" element={<Flowerpage />} />

        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App

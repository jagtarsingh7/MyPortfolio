import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home';

function App() {
  return (
    <div className="border-8 border-red-800">
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route/>
        <Route/>
        <Route/> */}
      </Routes>
    </div>
  );
}

export default App;

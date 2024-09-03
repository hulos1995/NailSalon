import React from 'react';
import Home from './Components/pages/Home/Home';
import Header from './Components/Header/Header';
import Services from './Components/pages/Services/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

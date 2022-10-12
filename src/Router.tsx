import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Maps from './pages/Map/Maps';
import Outfits from './pages/Outfits/Outfits';
import OutfitsResult from './pages/Outfits/Result';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/outfits/restult" element={<OutfitsResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

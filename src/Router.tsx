import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Maps from './pages/Map/Maps';
=======
<<<<<<< HEAD
import Main from './components/pages/Main/Main';
=======

=======
import Maps from './pages/Map/Maps';
>>>>>>> 101b3b2 (Added weather icons and interfaces for the overlays)
>>>>>>> 8be973a (Added weather icons and interfaces for the overlays)
import Main from './pages/Main/Main';
=======
import Main from './components/pages/Main/Main';
>>>>>>> 9f3605f (초기세팅)
=======
import Main from './pages/Main/Main';
>>>>>>> 4759096 (complict   해결)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path='/' element={<Main />} />
        <Route path='/maps' element={<Maps />} />
=======
        <Route path="/" element={<Main />} />
>>>>>>> 9f3605f (초기세팅)
=======
        <Route path='/' element={<Main />} />
        <Route path='/maps' element={<Maps />} />
>>>>>>> 8be973a (Added weather icons and interfaces for the overlays)
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

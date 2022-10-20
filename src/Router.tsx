import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Maps from "./pages/Map/Maps";
import Outfits from "./pages/Outfits/Outfits";
import OutfitsResult from "./pages/Outfits/Result";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD

=======
import NotFound from "./components/NotFound/NotFound";
>>>>>>> ebabbbe6ea912aafaaed6ee7cc1c3d22a31f1340
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/outfits/restult" element={<OutfitsResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

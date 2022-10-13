import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GestionDesLocataires from "../pages/GestionDesLocataires";
import GestionVehicule from "../pages/GestionVehicule";
import VoitureListe from "../pages/VoitureListe";
import VoitureDetails from "../pages/VoitureDetails";


import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/GestionDesLocataires" />} />
      <Route path="/GestionDesLocataires" element={<GestionDesLocataires />} />
      <Route path="/GestionVehicule" element={<GestionVehicule />} />
      <Route path="/VoitureListe" element={<VoitureListe />} />
      <Route path="/VoitureListe/:slug" element={<VoitureDetails />} />
     
      
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

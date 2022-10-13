import React from "react";


import Helmet from "../components/Helmet/Helmet";





import "../styles/GestionVehicule.css";
import VoitureFormGestionVehicule from './../components/UI/VoitureFormGestionVehicule';


const GestionVehicule = () => {
  return (
    <Helmet title="GestionVehicule">
    
    <h1>Ajout des vehicules </h1>
      <VoitureFormGestionVehicule/>
    
    </Helmet>
    
  );
};

export default GestionVehicule;

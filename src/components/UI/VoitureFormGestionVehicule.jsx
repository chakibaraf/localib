import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";


const VoitureFormGestionVehicule = () => {
  return (
    <Form  className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Marque" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Model" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="immatriculation" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="année" required />
        </FormGroup>
       

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Enregistrement  </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default VoitureFormGestionVehicule;
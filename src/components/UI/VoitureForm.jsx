import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const VoitureForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Nom" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Prenom" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="email" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="adresse" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="date" required />
        </FormGroup>
       
          <FormGroup className="form__group">
          <button className="btn find__car-btn">Enregistrement  </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default VoitureForm;

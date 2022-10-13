import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import CustomerData from "../../assets/data/CustomerData";

import clientInfo from './clientInfo';




const ClientForm = () => {
  const [dataCust, setDataCust] = useState([CustomerData])

  /* un usestate vide pour gerer mon   input */
  const [stateChamps, setChamps] = useState();

  /* prends en parametre l'id utiliser la methode filter pour chaque element de 
  dataArr (item prends l'inverse de id donc rien (creer un nouveau tableau))
   */
  const delateClt = (id) => {

    const filter = dataCust.filter(item => {
      return item.id !== id;
    })
    /* utliser setDatarr permet d'appliquer la modification */
    setDataCust(filter)
  }
  /* linkedinput permet de lier mon input avec ce que j'ai envie d'ecrire */
  const linkedChamps = (e) => {
    setChamps(e);
  }
  const addClts = (e) => {
    e.preventDefault();
    const newCust = [...dataCust];
    const newClt = {};
    newClt.ext = stateChamps;
    newClt.id = uuidv4();
    newCust.push(newClt);

   

    setDataCust(newCust);
    setChamps('');

    console.log(dataCust);
  }
  
    
  return (
    <Form onSubmit={e => addClts(e)}  className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input value={stateChamps} onInput={e => linkedChamps(e.target.value)} type="text" placeholder="Nom" required />
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
      <div>

      <ul className='list-group'>
        {dataCust.map((item) => {
          return (
            <clientInfo
            txt={item.brand}
            key={item.id}
            id={item.id}
            delfunc={delateClt}
            />
            )
          })}
      </ul>
          </div>
    </Form>
  );
};

export default ClientForm;

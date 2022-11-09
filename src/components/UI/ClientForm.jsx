import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import CustomerData from "../../assets/data/CustomerData";
import ClientInfos from './ClientInfos';






const ClientForm = () => {
  const [dataCust, setDataCust] = useState(CustomerData)

  /* un usestate vide pour gerer mon   input */
  
  const [stateNom, setNom] = useState();
  const [statePrenom, setPrenom] = useState();
  const [stateEmail, setEmail] = useState();
  const [stateAdresse, setAdresse] = useState();
  const [stateDate, setDate] = useState();

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
  
  const linkedNom = (e) => {
    setNom(e);
  }
  const linkedPrenom = (e) => {
    setPrenom(e);
  }
  const linkedEmail = (e) => {
    setEmail(e);
  }
  const linkedAdresse = (e) => {
    setAdresse(e);
  }
  const linkedDate = (e) => {
    setImmediate(e);
  }
  
  const addClts = (e) => {
    e.preventDefault();
    const newCust = [...dataCust];
    const newClt = {};

    newClt.nom = stateNom;
    newClt.prenom = statePrenom;
    newClt.email = stateEmail;
    newClt.adresse = stateAdresse;
    newClt.date = stateDate;
    //newClt.ext = stateChamps;

    newClt.id = uuidv4();
    newCust.push(newClt);

   

    setDataCust(newCust);
    setNom('');
    setPrenom('');
    setEmail('');
    setAdresse('');
    setDate('');

    console.log(dataCust);
  }
  
    
  return (
    <Form onSubmit={e => addClts(e)}  className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input value={stateNom} onInput={e => linkedNom(e.target.value)} type="text" placeholder="Nom" required />
         
        </FormGroup>
        <FormGroup className="form__group">
          <input value={statePrenom} onInput={e => linkedPrenom(e.target.value)} type="text" placeholder="Prenom" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input value={stateEmail} onInput={e => linkedEmail(e.target.value)}type="text" placeholder="email" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input value={stateAdresse} onInput={e => linkedAdresse(e.target.value)} type="text" placeholder="adresse" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input  value={stateDate} onInput={e => linkedDate(e.target.value)} type="date" placeholder="date" required />
        </FormGroup>
       
          <FormGroup className="form__group">
          <button className="btn find__car-btn">Enregistrement  </button>
        </FormGroup>
      </div>
      <div>

      <ul className='list-group'>
        {dataCust.map((item) => {
          return (
            <ClientInfos
            info1={item.nom}
            info2={item.prenom}
            info3={item.email}
            info4={item.adresse}
            info5={item.date}
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

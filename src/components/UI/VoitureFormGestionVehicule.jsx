import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import carData from './../../assets/data/carData';
import VoitureInfo from './VoitureInfo';


const VoitureFormGestionVehicule = () => {
  const [dataArr, setDatarr] = useState(carData)

  /* un usestate vide pour gerer mon   input */
  const [stateInput, setInput] = useState();

  /* prends en parametre l'id utiliser la methode filter pour chaque element de 
  dataArr (item prends l'inverse de id donc rien (creer un nouveau tableau))
   */
  const delate = (id) => {

    const filter = dataArr.filter(item => {
      return item.id !== id;
    })
    /* utliser setDatarr permet d'appliquer la modification */
    setDatarr(filter)
  }
  /* linkedinput permet de lier mon input avec ce que j'ai envie d'ecrire */
  const linkedinput = (e) => {
    setInput(e);
  }
  const addtodo = (e) => {
    e.preventDefault();
    const newarr = [...dataArr];
    const newtodo = {};
    newtodo.brand = stateInput;
    newtodo.id = uuidv4();
    newarr.push(newtodo);

    console.log(newarr);

    setDatarr(newarr);
    setInput('');

    console.log(dataArr);
  }
  return (
    <div>

      <Form onSubmit={e => addtodo(e)} className="form">
        <div className=" d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="form__group">
            <input value={stateInput} onInput={e => linkedinput(e.target.value)}
              type="text" placeholder="Marque" required />
          </FormGroup>
          <FormGroup className="form__group">
            <input   type="text" placeholder="Model" required />
          </FormGroup>

          <FormGroup className="form__group">
            <input   type="text" placeholder="immatriculation" required />
          </FormGroup>
          <FormGroup className="form__group">
            <input  type="text" placeholder="année" required />
          </FormGroup>

          

          <FormGroup className="form__group">
            <button className="btn find__car-btn">Enregistrement  </button>
          </FormGroup>
        </div>
      </Form>
      <ul className='list-group'>
        {dataArr.map((item) => {
          return (
            <VoitureInfo
              txt={item.brand}
              key={item.id}
              id={item.id}
              delfunc={delate}
            />
          )
        })}
      </ul>
    </div>

  );
};

export default VoitureFormGestionVehicule;
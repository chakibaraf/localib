/* envoi des informations parent de Form.js vers l'enfant Item.js avec props */
import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";







export default function VoitureInfo(props) {

    const [stateToggle, setToggle] = useState(true);


    const changeState = () => {
        setToggle(!stateToggle);
    }
    return (


        <div className="border d-flex justify-content-between align-items-center p-3 m-3">

            {/* inject information dataArr dans le input */}

            <div className="p-3"> Marque :
                {props.txt}</div>
            <div className="p-3"> Model :  {props.txt1}</div>

            <div className="p-3"> Immatriculation :  {props.txt2}</div>
            <div className="p-3">  Année : {props.txt3}</div>
            <div class="form-check form-switch">

                <button className="btn btn-danger p-2 h-50"
                    /* inject la methode delate dans le bouton avec props et l'id */
                    onClick={() => props.delfunc(props.id)}
                >supprimer</button>


            </div>
            <div class="form-check form-switch">
                {stateToggle ? <span> pas disponible</span> : <span> disponible
                    <button className="btn" >
                    <Link to={`/VoitureListe/`}>Louer</Link>
                    </button></span>}

                <input onClick={changeState} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
            </div>

        </div>



    )
}

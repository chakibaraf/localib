/* envoi des informations parent de Form.js vers l'enfant Item.js avec props */

export default function VoitureInfo (props){
    return(
        <div>
            <div className="border d-flex justify-content-between align-items-center p-3 m-3">
                {/* inject information dataArr dans le input */}
                <li className="p-3"> {props.txt}</li>
                <li className="p-3"> {props.txt1}</li>
                <li className="p-3"> {props.txt2}</li>
                <li className="p-3"> {props.txt3}</li>
    
                <button className="btn btn-danger p-2 h-50"
                /* inject la methode delate dans le bouton avec props et l'id */
                onClick={()=>props.delfunc(props.id)}
                >supprimer</button>
            </div>

        </div>
    )
}

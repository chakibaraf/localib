export default function clientInfo (props){
    return(
        <div>
            <li className="border d-flex justify-content-between align-items-center p-2 m-2">
                {/* inject information dataArr dans le input */}
                <div className="p-3"> {props.ext}</div>
                <button className="btn btn-danger p-2 h-50"
                /* inject la methode delate dans le bouton avec props et l'id */
                onClick={()=>props.delfunc(props.id)}
                >supprimer</button>
            </li>

        </div>
    )
}

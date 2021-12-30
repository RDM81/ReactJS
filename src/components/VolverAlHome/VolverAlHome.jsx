import { useContext } from "react";
import CartContext from '../../context/CartContext';
import "../VolverAlHome/VolverAlHome.css"

import { Link } from 'react-router-dom';

const VolverAlHome = () => {
    const {cart} = useContext(CartContext);

    return ( 
        
        cart.length>0 ? 
            <>
            <div>
            
            </div>
            </>  
        : <Link to="/" ><button type="button" className="btn btn-light margin_izq"> Volver al HOME </button> </Link>
            )
}


export default VolverAlHome
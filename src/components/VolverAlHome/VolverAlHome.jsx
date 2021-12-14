import { useContext } from "react";
import CartContext from '../../context/CartContext';
// import Cart from "../Cart/Cart";

import { Link } from 'react-router-dom';

const VolverAlHome = () => {
    const {cart} = useContext(CartContext);

    return ( 
        
        cart.length>0 ? 
            <>
            <div>
            
            </div>
            </>  
        : <Link to="/" ><button> Volver al HOME </button> </Link>
            )
}


export default VolverAlHome
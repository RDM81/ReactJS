import { useContext } from "react";
import CartContext from '../../context/CartContext';
import carrito620 from "../../components/assets/carrito620.png"
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cart} = useContext(CartContext);

    return ( 
        
        cart.length>0 ? 
            <>
            <div>
            
            <Link to="/cart" className="nav-item nav-link">
            <img src= {carrito620} alt="" />
            <span> {cart.length} </span>
            </Link>
            </div>
            </>  
        : null
            )
}


export default CartWidget
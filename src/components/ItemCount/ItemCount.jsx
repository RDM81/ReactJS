import { useState, useContext } from "react";
import CartContext from '../../context/CartContext.jsx';
import "../ItemCount/ItemCount.css"

const ItemCount = ({stock, onAdd, item}) => {
    const { addToCart } = useContext(CartContext);
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        number !== stock && setNumber(number + 1);
    };



    const onDecrease = () => {
        number !== 0 && setNumber(number - 1)
        
    }

    
    return (
        <div>
            <h6>{`Cantidad: ${number}`}</h6>

            <button onClick = {onIncrease} className="btn btn-dark Margen_OnIncrease">+</button>
            <button onClick = {onDecrease} className="btn btn-dark Margen_OnDecrease">-</button>
            <button disabled={number === 0} onClick = {()=>addToCart(item, number)} className="btn btn-dark">Agregar al Carrito</button>
        </div>
    )
};

export default ItemCount;
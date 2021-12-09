import { useState,  } from "react";


const ItemCount = ({stock, onAdd}) => {

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

            <button onClick = {onIncrease}>+</button>
            <button onClick = {onDecrease}>-</button>
            <button disabled={number === 0} onClick = {()=>onAdd(number)}>Agregar al Carrito</button>
        </div>
    )
};

export default ItemCount;
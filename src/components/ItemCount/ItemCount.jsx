import { useState } from "react";

const ItemCount = ({stock}) => {
    
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        number !== stock && setNumber(number + 1);
    };



    const onDecrease = () => {
        number !== 0 && setNumber(number - 1)
        
    }

    // const date = new Date(); ${date.toString()}
    return (
        <div>
            <h6>{`Cantidad: ${number}`}</h6>
            <button onClick = {onIncrease}>+</button>
            <button onClick = {onDecrease}>-</button>
        </div>
    )
};

export default ItemCount;
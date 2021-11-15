import { useState } from "react";

const ItemCount = ({stock}) => {
    
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        if (number !== 10){
        setNumber(number + 1);
    }

    }

    const onDecrease = () => {
        setNumber(number - 1)
        if(number === 0) {
            setNumber(0)
        }
    }

    // const date = new Date(); ${date.toString()}
    return (
        <div>
            <h1>{`El numero es ${number}`}</h1>
            <button onClick = {onIncrease}>+</button>
            <button onClick = {onDecrease}>-</button>
        </div>
    )
}

export default ItemCount;
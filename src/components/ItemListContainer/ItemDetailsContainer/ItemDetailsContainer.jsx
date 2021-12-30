import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState, useEffect} from 'react';
import { Fragment } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails.jsx';
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = ({greetings}) => {
    const {id} = useParams()
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, "products", id);
        getDoc (ref).then(snap => {
            setItem({
                id: snap.id,
                ...snap.data(),
            })
        })
    }, [id]);
    
    const onAdd = (cantidad) => {
        setIrAlCarrito(true)
    };

    return(
        <Fragment>
        <h1 className="Titulo_color">{greetings}</h1>
        <ItemDetails item = {item} onAdd={onAdd} irAlCarrito={irAlCarrito} />
        
        </Fragment>

    )
}

export default ItemDetailsContainer;
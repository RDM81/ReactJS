import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from './Item/itemList.jsx';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = ({greetings}) => {
    const{generoId} = useParams()
    const [items, setItems] = useState([]);

    useEffect (() => {
        const db = getFirestore();
        const ref = collection(db, "products");
        const filtrado = generoId ? query(ref, where("generoId", "==", generoId)) : ref;
        getDocs(filtrado).then(snapshot => {
            const products = snapshot.docs.map((doc) => ( { 
                
                    id: doc.id,
                    ...doc.data(),
                }));
                setItems(products);
            });
    }, [generoId]);

    return(
        <Fragment>
        <h1 className="Titulo_color">{greetings}</h1>
        <ItemList items={items} />
        
        </Fragment>

    )
}

export default ItemListContainer;
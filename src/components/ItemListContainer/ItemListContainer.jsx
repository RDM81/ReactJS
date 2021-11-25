
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from './Item/itemList.jsx';
import  { products } from './Item/items.jsx';

import { useParams } from 'react-router-dom';


const ItemListContainer = ({greetings}) => {
    const{generoId} = useParams()
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                const filtrado = res.filter(
                    (prod) => prod.generoId === generoId
                );

                generoId ? setItems(filtrado) : setItems(res);
                console.log(filtrado);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
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
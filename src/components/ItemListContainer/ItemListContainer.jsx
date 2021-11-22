
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from './Item/itemList.jsx';
import  { products } from './Item/items.jsx';
import ItemDetailsContainer from './ItemDetailsContainer/ItemDetailsContainer';


const ItemListContainer = ({greetings}) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setItems(res);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return(
        <Fragment>
        <h1 className="Titulo_color">{greetings}</h1>
        <ItemList items={items} />
        <ItemDetailsContainer />
        </Fragment>

    )
}

export default ItemListContainer;
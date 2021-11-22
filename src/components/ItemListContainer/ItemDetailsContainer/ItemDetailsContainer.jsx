import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails.jsx';
import  { products } from '../Item/items.jsx';

const ItemDetailsContainer = ({greetings}) => {
    
    const [vinyl, setVinyl] = useState([]);
    
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products[0]);
            }, 2000);
        });
        getItem
            .then((res) => {
                setVinyl(res);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return(
        <Fragment>
        <h1 className="Titulo_color">{greetings}</h1>
        <ItemDetails item = {vinyl} />
        
        </Fragment>

    )
}

export default ItemDetailsContainer;
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from './Item/itemList.jsx';
// import  { products } from './Item/items.jsx';
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
                
                    generoId: doc.generoId,
                    ...doc.data(),
                }));
                setItems(products);
            });

            // const categorias = products.filter(i => i.category === `${generoId}`);
            // generoId === undefined ? setItems(products) : setItems(categorias);
    
    }, [generoId]);
    
    // useEffect(() => {
    //     const traerProductos = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, 1000);
    //     });
    //     traerProductos
    //         .then((res) => {
    //             const filtrado = res.filter(
    //                 (prod) => prod.generoId === generoId
    //             );

    //             generoId ? setItems(filtrado) : setItems(res);
                
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [generoId]);

 console.log(generoId);
    return(
        <Fragment>
        <h1 className="Titulo_color">{greetings}</h1>
        <ItemList items={items} />
        
        </Fragment>

    )
}

export default ItemListContainer;
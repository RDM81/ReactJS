import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState, useEffect} from 'react';
import { Fragment } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails.jsx';
// import  { products } from '../Item/items.jsx';
import { useParams } from 'react-router-dom';
// import CartContext from '../../../context/CartContext.jsx';

const ItemDetailsContainer = ({greetings}) => {
    const{id} = useParams()
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const [item, setItem] = useState([]);
    // const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, "products", id);
        getDoc (ref).then(snap => {
            setItem({
                id: snap.generoId,
                ...snap.data(),
            })
        })
    }, [id]);
    console.log(item);
    // useEffect(() => {
    //     const traerProductos = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, 2000);
    //     });
    //     traerProductos
    //         .then((res) => {
    //             const producto = res.find(
    //                 (prod) => prod.id === parseInt(`${id}`)
                    
    //             );
    //             setItem(producto);
    //             })
    //             .catch((error) => {
    //             console.log(error);
    //         });
    // }, [id]);

    const onAdd = (cantidad) => {
        console.log({...item, quantity: cantidad});
        // addToCart(item, cantidad)
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
import React, { useState, useContext, useEffect } from "react";
import Mensaje from "../Mensaje/Mensaje";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import { collection, getDocs, getFirestore, query, orderBy } from "firebase/firestore";

const Order = () => {
    const [order, setOrder] = useState([]);
    const { userEmail } = useContext(CartContext);
    const { email } = userEmail;

    useEffect(() => {
        const db = getFirestore();
        const ref = query(collection(db, 'ticket'), orderBy('date'));
            getDocs(ref).then((snapshot)=>{
                const orden = snapshot.docs.map((doc)=> {
                const data = doc.data();
                const {date} = data;
                const fecha = new Date(date.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                }).format(fecha);
                return{
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt,
                };
            });
                setOrder(orden.filter((x)=> x.buyer === email ));
            });
    }, [email]);

    return (
        <div>
            {order?.length === 0 ? (
                <h1> Gracias por Comprar</h1>
            ) : (
                <>
                <h2>Vuelva Pronto</h2>
                {order.map((ord)=> (
                    <Mensaje key={ord.id} ord={ord} />
                ))}
                </>
            )}
            <Link to="/"><button>HOME</button> </Link>
        </div>
    );
                };

export default Order;

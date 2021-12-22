import {addDoc, collection, getFirestore} from "firebase/firestore";
import { useContext, useState } from 'react';
// import {useDeleteFromCart} from '../../context/CartContext.jsx'
import CartContext from '../../context/CartContext';
// import logoCart from '../Cart/assets/carrito5.png';
// import { Link } from 'react-router-dom';
import VolverAlHome from '../VolverAlHome/VolverAlHome.jsx';
import CartBuy from '../CartBuy/CartBuy.jsx';
import Order from "../Order/Order";

const Cart = () => {
    const {cart, borrar, precioTotal, getUser} = useContext (CartContext)
    // const deleteProduct = useDeleteFromCart()

    const [goTicket, setGoTicket] = useState(false);
    const [form, getForm] = useState({nombre: '', email: '' });

    const llenarFormulario = (e) => {
        const {name, value} = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    };

    const date = new Date();

    const finalizar = () => {
        getUser(form);
        const db = getFirestore();
        const ref = collection(db, 'ticket');
        const newOrder = {
            buyer: form.email,
            items: cart,
            date: date,
            total: precioTotal(),
        };
        addDoc(ref, newOrder);
        setGoTicket(true);
        borrar();
        
    };

    return(
        <>
            <>
            {!goTicket ? (
                <>
                    {
                        cart.map((item) => (
                            <CartBuy key={item.id} item={item} />
                        ))}
                    <div className='contentTotal'>
                        <p>Total: $ {precioTotal()}</p>
                        <button onClick={borrar}>Clear</button>
                        <VolverAlHome />
                    </div>
                    <form method="POST" onSubmit={finalizar}>
                        <input onChange={llenarFormulario} type="email" name="email" placeholder="email"/>
                        <input onChange={llenarFormulario} type="text" name="nombre" placeholder="nombre"/>
                        <button disabled={cart?.length === 0 || form.nombre === '' || form.email === ''}> COMPRAR</button>
                    </form>
                </>
            ) : ( 
                <>
                    <Order />           
                </>

            )}
            </>
        </>
    );

};



export default Cart;
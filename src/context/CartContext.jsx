// import { getFirestore, collection, getDocs } from "firebase/firestore";
import React, { useState, useContext } from "react";
// import { useEffect } from "react/cjs/react.development";



const CartContext = React.createContext()


export const CartProvider = ({ children }) =>{

const [cart, setCart] = useState([])
// const [items, setItems] = useState([])
const [isCartOpen, setIsCartOpen] = useState(false)
const [irAlCarrito, setIrAlCarrito] = useState(false)
const [userEmail, setUserEmail] = useState('');

// useEffect (() => {
//     const db = getFirestore();
//     const ref = collection(db, "products");
//     const filtrado = generoId ? query(ref, where("generoId", "==", generoId)) : ref;
//     getDocs(filtrado).then(snapshot => {
//         const products = snapshot.docs.map((doc) => ( { 
            
//                 generoId: doc.generoId,
//                 ...doc.data(),
//             }));
//             setItems(products);
//         });

//         // const categorias = products.filter(i => i.category === `${generoId}`);
//         // generoId === undefined ? setItems(products) : setItems(categorias);

// }, [generoId]);



const openCart = () => {
    setIsCartOpen(!isCartOpen)
}

const isOnCart = (item) => {
    let resultado = cart?.findIndex(product => product.id === item.id)
    console.log(resultado);
    return resultado;
    
}

const terminarCarrito = (b) =>{
    console.log("terminarCarrito" + irAlCarrito);
    setIrAlCarrito (b);

}

const addToCart = (item,cantidad) =>{
    precioTotal()
    terminarCarrito(true);
   if (isOnCart(item) === -1 ){
        setCart([...cart, {...item, cantidad}]);
        // setCart((current)=> current.concat(item));
        // setCart(cart.concat(item, cantidad));
        console.log(cart);
    } else {
        let itemAux = cart.find (p => p.id === item.id);
        // for (const i of cart) {
        //     if (cart[i].id === itemAux.id ){
        //     cart[i].cantidad = cart[i].cantidad + cantidad
        //     }
        let itemAux2 = {
            id: itemAux.id,
            nombre: itemAux.nombre,
            precio: itemAux.precio,
            stock: itemAux.stock,
            cantidad: itemAux.cantidad + cantidad,
            generoId: itemAux.generoId,
            img: itemAux.img,
        }
        console.log(itemAux2);

        const cartAux = (cart.filter(product => product.id !== itemAux.id))
        
        
        setCart([...cartAux, itemAux2]);
        
    }
};

const calcularTotalPorItem = (item) => {
    return item.precio * item.cantidad
}


    function precioTotal() {
        let subTotal = cart.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
        return subTotal;
    }

    

const deleteFromCart = (item) => {
    setCart(cart.filter(product => product.id !== item.id))
}

const borrar = () => {
    setCart([]);
};

const getUser = (form) => {
    setUserEmail(form);
};




return(
    <CartContext.Provider value={{addToCart, getUser, userEmail, precioTotal, calcularTotalPorItem, terminarCarrito, irAlCarrito, cart, borrar, isCartOpen, setIsCartOpen, openCart, deleteFromCart}} >
        {children}
    </CartContext.Provider>
);

};




export function useIsCartOpen() {
    return useContext(CartContext).isCartOpen
}

export function useCartOpen() {
    return useContext(CartContext).openCart
}

export function useCart(){
    return useContext(CartContext).cart
}

export function useDeleteFromCart(){
    return useContext(CartContext).deleteFromCart
}




export default CartContext
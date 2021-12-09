import React, { useState } from "react";

const CartContext = React.createContext()


export const CartProvider = ({ children }) =>{

const [cart, setCart] = useState([])

const addToCart = (item,cantidad) =>{
setCart([...cart, {...item, cantidad}]);
// setCart(cart.concat(item))
// console.log(cart);
};

const borrar = () => {
    setCart([]);
};


return(
    <CartContext.Provider value={{addToCart, cart, borrar}} >
        {children}
    </CartContext.Provider>
);

};





export default CartContext
import React from "react";

const Mensaje = ({ord}) => {
    // const nombreprod = ord.items.map((x) => x.nombre);
    const {buyer} = ord;
    
    
    return (
        <>
        {
            ord.items.map((ticket) => (
                <div>
                <p>ID de la compra: {ord.id}</p>
                <p>Fecha: {ord.date}</p>
                <p>Producto: {ticket.nombre}</p>
                <p>Email: {buyer}</p>
             </div>
            )
       
            )}
        
    );
    </>
    )};

export default Mensaje;
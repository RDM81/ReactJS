import React from "react";
import "../Mensaje/Mensaje.css"


const Mensaje = ({ord}) => {
    const {buyer} = ord;
    
    return (
        <>
        {
            ord.items.map((ticket) => (
                <div className="Contenido_Mensaje">
                <p> <b> ID de la compra:</b> {ord.id}</p>
                <p> <b> Fecha: </b> {ord.date}</p>
                <p> <b> Producto: </b> {ticket.nombre}</p>
                <p> <b> Email: </b> {buyer}</p>
                <p> <b> total: $ </b> {ord.total}</p>
            </div>
            )

            )}
        
    
        </>
    )};

export default Mensaje;
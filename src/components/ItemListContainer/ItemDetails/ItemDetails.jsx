import React from 'react';

const ItemDetails = ({ item }) => {
    console.log(item);
    return (
        <>
            <div data-aos="zoom-in" className="card mb-3">
                    <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={item.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{item.autor}</h5>
                        <h5 className="card-title">{item.nombre}</h5>
                        <h5 className="card-title">{item.remixer}</h5>
                        <p className="card-text">Precio: $ {item.precio}</p>
                        <p className="card-text">Genero: {item.genero}</p>
                        
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
        </>
    );
};

export default ItemDetails;
import React from 'react';

const Item = ({ item }) => {
    return (
        <>
            <div data-aos="zoom-in" className="card mb-3">
                    <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={item.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Precio: $ {item.precio}</p>
                        <p className="card-text">Genero: {item.genero}</p>
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
        </>
    );
};

export default Item;
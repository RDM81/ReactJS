import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import CartContext from '../../../context/CartContext.jsx';



const ItemDetails = ({ item, onAdd}) => {
        const { irAlCarrito, terminarCarrito } = useContext(CartContext);
        console.log(irAlCarrito);
    return (
        <>
            <div data-aos="zoom-in" className="card mb-3">
                    <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={item.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Autor: <b> {item.autor}</b></h5>
                        <h5 className="card-title">Titulo: <b> {item.nombre}</b></h5>
                        <h5 className="card-title">Remixer: <b> {item.remixer}</b></h5>
                        <p className="card-text">Precio: $ {item.precio}</p>
                        <p className="card-text">Genero: {item.generoId}</p>
                        <div>
                            <p>Stock: {item.stock}</p>
                        </div>
                        <div>
                            {irAlCarrito ? 
                            (<><Link to="/Cart"> <button onClick={() => terminarCarrito(false)}> Confirmar Compra</button></Link></>) 
                            : 
                            (<><ItemCount stock={item.stock} addTo={onAdd} item={item} /></>)}
                        
                        
                        </div>
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
        </>
    );
};

export default ItemDetails;
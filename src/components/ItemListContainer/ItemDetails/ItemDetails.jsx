import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import CartContext from '../../../context/CartContext.jsx';



const ItemDetails = ({ item, onAdd}) => {
        const { irAlCarrito, terminarCarrito } = useContext(CartContext);

        
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
                        <p className="card-text"> <b>Precio: $ {item.precio}</b></p>
                        <p className="card-text"> <b>Genero: {item.generoId}</b></p>
                        <div>
                            <p> <b>Stock: {item.stock}</b></p>
                        </div>
                        <div>
                            {irAlCarrito ? 
                            (<><Link to="/Cart"> <button onClick={() => terminarCarrito(false)} className='btn btn-dark'> Confirmar Compra</button></Link></>) 
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
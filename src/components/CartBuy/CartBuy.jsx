import { useContext} from 'react';
import {useDeleteFromCart} from '../../context/CartContext.jsx'
import CartContext from '../../context/CartContext';

const CartBuy = ({item}) => {
    const {calcularTotalPorItem} = useContext (CartContext)
    const deleteProduct = useDeleteFromCart()

    
    return(
        <>
            <div>
                <div data-aos="zoom-in" className="card mb-3">
                    <div className="row no-gutters">
                    <div className="col-md-2">
                        
                        <img src={item.img} className="card-img" alt={item.nombre} />
                        
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Precio Unidad: $ {item.precio}</p>
                        <p>Precio: $ {calcularTotalPorItem(item)}</p>
                        <p className="card-text">Genero: {item.generoId}</p>
                        <p className="card-text">Cantidad: {item.cantidad}</p>
                        <button onClick={() => deleteProduct(item)}>delete</button>
                        

                        
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
            
            
        </>
    );
};

export default CartBuy;
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
                        <div className="col-md-4">
                            
                            <img src={item.img} className="card-img" alt={item.nombre} />
                            
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nombre:</b> {item.nombre}</h5>
                                <p className="card-text"> <b> Precio Unidad: $ {item.precio} </b></p>
                                <p> <b> Precio total x Unidad: $ {calcularTotalPorItem(item)} </b></p>
                                <p className="card-text"><b>Genero: {item.generoId} </b></p>
                                <p className="card-text"> <b>Cantidad: {item.cantidad} </b></p>
                                <button onClick={() => deleteProduct(item)} className='btn btn-dark'>delete </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    );
};

export default CartBuy;
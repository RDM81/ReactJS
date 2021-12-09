import { useContext } from 'react';
import CartContext from '../../context/CartContext';
// import logoCart from '../Cart/assets/carrito5.png';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, borrar} = useContext (CartContext)
    return(
        <>
            {cart.map((item) => (
            <div key={item.id}>
                <div data-aos="zoom-in" className="card mb-3">
                    <div className="row no-gutters">
                    <div className="col-md-2">
                        <Link to={`/item/${item.id}`}>
                            <img src={item.img} className="card-img" alt={item.nombre} />
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Precio: $ {item.precio}</p>
                        <p className="card-text">Genero: {item.generoId}</p>
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
            ))}
            <button onClick={borrar}>Clear</button>
            
        </>
    );
};

export default Cart;
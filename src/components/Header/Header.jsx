import logo from '../assets/rdm200.png';
import '../Header/Header.css'
// import Cart from '../Cart/Cart.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
// import { useCart } from '../../context/CartContext';

const Header = () => {

         const [cartEmty, setCartEmpty] = useState(true)
            // setCartEmpty(false)
        

    return(
        <>
        
        <header>
        <div className="row">
            <div className="col-lg-12 col-xs-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/"><img src={logo} alt="logo dj roberto di maggio" /></Link>
                
                        <button className="navbar-toggler" type="button" data-toggle="collapse" 
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link active"><button type="button" className="btn btn-light">HOME</button></Link>
                                <Link to="/genero/Progressive House" className="nav-item nav-link"><button type="button" className="btn btn-light">PROGRESSIVE HOUSE <span className="sr-only">(current)</span></button></Link> 
                                <Link to="/genero/Trance" className="nav-item nav-link"><button type="button" className="btn btn-light">TRANCE</button></Link> 
                                <Link to="/genero/Progressive Trance" className="nav-item nav-link"><button type="button" className="btn btn-light">PROGRESSIVE TRANCE</button></Link>                    
                                <Link to="/genero/Live Sets" className="nav-item nav-link"><button type="button" className="btn btn-light">LIVE SETS</button></Link>
                                <Link to="/cart" className="nav-item nav-link">
                                <div>

                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg" id="botonCarrito">
                            Cart  <span id="carritoCantidad" className="badge badge-light">0</span></button>
                            {/* {
                                                                    
                                cart?.map((item)=> {

                                    const {
                                        img,
                                        nombre,
                                        precio,
                                        id,
                                    } = item
                                    return( */}
                                      <div className="modal fade bd-example-modal-lg" id="carrito" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content" id="carritoProducto">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                            
                                                                
                                                                        <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Nombre</th>
                                                                <th scope="col">Subtotal x Cantidad</th>
                                                                </tr>
                                                                </thead>
                                                            <tbody id="containerProductos">

                                                            </tbody>
                                                        </table>
                                                            
                                                            <div id='total'>Precio Total: $ <span id="precioFinal"></span></div>
                                                            <button type="button" className="btn btn-secondary" id="btnConfirmar"> Confirmar Compra</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>      
                                    {/* )
                                }
                                ) */}
                                            
                                                                
                                                                
                                                            
                                                            
                                </Link>
                                
                                    
                            </div>
                    </div>
                    <div >
                                               
                    <div >


                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
     
        </>
    )
}

export default Header
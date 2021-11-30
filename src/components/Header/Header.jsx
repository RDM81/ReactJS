import logo from '../assets/rdm200.png';
import '../Header/Header.css'
import Cart from '../Cart/Cart.jsx'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        
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
                                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                    <Link to="/" className="nav-item nav-link active"><button type="button" className="btn btn-light">HOME</button></Link>
                                    <Link to="/genero/Progressive House" className="nav-item nav-link"><button type="button" className="btn btn-light">PROGRESSIVE HOUSE <span className="sr-only">(current)</span></button></Link> 
                                    <Link to="/genero/Trance" className="nav-item nav-link"><button type="button" className="btn btn-light">TRANCE</button></Link> 
                                    <Link to="/genero/Progressive Trance" className="nav-item nav-link"><button type="button" className="btn btn-light">PROGRESSIVE TRANCE</button></Link>                    
                                    <Link to="/genero/Live Sets" className="nav-item nav-link"><button type="button" className="btn btn-light">LIVE SETS</button></Link>
                                    <Link to="/cart" className="nav-item nav-link"><button type="button" className="btn btn-light">CART</button></Link>
                                    
                                        
                                </div>
                        </div>
                        <div >
                            <Cart />
                        <div >
    

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>    
    
    )
}

export default Header
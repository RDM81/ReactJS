import logo from '../Header/assets/rdm200.png';
import '../Header/Header.css'
import Cart from '../Cart/Cart.jsx'

const Header = () => {
    return(
        
        <header>
            <div className="row">
                <div className="col-lg-12 col-xs-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} alt="logo dj roberto di maggio" />
                            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <button type="button" className="btn btn-light"><a className="nav-item nav-link active" href="../paginas/Home.html">HOME</a></button>
                                <button type="button" className="btn btn-light"><a className="nav-item nav-link" href="../paginas/Biografia.html">BIO <span className="sr-only">(current)</span></a></button>
                                <button type="button" className="btn btn-light"><a className="nav-item nav-link" href="../paginas/Flyers.html">FLYERS</a></button>
                                <button type="button" className="btn btn-light"><a className="nav-item nav-link" href="../paginas/Fotos.html">FOTOS</a></button>                        
                                <button type="button" className="btn btn-light"><a className="nav-item nav-link" href="../paginas/Musica.html">MUSICA</a></button>
                                <button type="button" className="btn btn-light"><a className="nav-item nav-link" href="../paginas/Shop.html">SHOP</a></button>
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
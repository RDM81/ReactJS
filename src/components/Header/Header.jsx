import logo from '../Header/rdm200.png';
import '../Header/Header.css'

const Header = () => {
    return(
        
        <header>
            <div class="row">
                <div class="col-lg-12 col-xs-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} alt="logo dj roberto di maggio" />
                            <button class="navbar-toggler" type="button" data-toggle="collapse" 
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <button type="button" class="btn btn-light"><a class="nav-item nav-link active" href="../paginas/Home.html">HOME</a></button>
                                <button type="button" class="btn btn-light"><a class="nav-item nav-link" href="../paginas/Biografia.html">BIO <span class="sr-only">(current)</span></a></button>
                                <button type="button" class="btn btn-light"><a class="nav-item nav-link" href="../paginas/Flyers.html">FLYERS</a></button>
                                <button type="button" class="btn btn-light"><a class="nav-item nav-link" href="../paginas/Fotos.html">FOTOS</a></button>                        
                                <button type="button" class="btn btn-light"><a class="nav-item nav-link" href="../paginas/Musica.html">MUSICA</a></button>
                                <button type="button" class="btn btn-light"><a class="nav-item nav-link" href="../paginas/Shop.html">SHOP</a></button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>    
    
    )
}

export default Header
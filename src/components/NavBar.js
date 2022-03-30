import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Xbox Store Argentina</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    <a className="nav-link" href="#">Xbox Game Pass</a>
                    <a className="nav-link" href="#">Juegos</a>
                    <a className="nav-link" href="#">Preguntas Frecuentes</a>
                    <CartWidget />
                </div>
            </div>

        </div>
    </nav>

    );
  }

  export default NavBar;
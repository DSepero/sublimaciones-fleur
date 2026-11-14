import logo from '../assets/Logo1.jpg';
import {Link} from 'react-router-dom';

function Header() {
  return (

<header className="header">
        <div className="marca">
          <div className="contenedor-logo">
            <img
              className="logo"
              src={logo}
              alt="Logo de Sublimaciones Fleur"
            />
          </div>

          <div className="presentacion">
            <h1>Sublimaciones Fleur</h1>
            <p>Diseños hechos con mucho love</p>
          </div>
        </div>

        <nav className="navbar">
          <Link to="/inicio">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/preguntas">Preguntas Frecuentes</Link>
          <Link to="/nosotras">Sobre Nosotras</Link>
          <Link to="/contacto">Contacto</Link>
          <div className="redes-sociales">
            <a
              href="https://www.instagram.com/sublimaciones_fleur/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61595394321582"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </nav>
      </header>
  );
}

export default Header;
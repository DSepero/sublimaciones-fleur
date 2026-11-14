import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <main>
      <section id="inicio" className="hero">
        <h2>Diseños únicos, creados con amor y dedicación</h2>

        <p>Convertimos tus ideas en detalles especiales</p>

        <Link to="/productos" className="hero-bottom">
          Descubrí todos nuestros productos
        </Link>
      </section>
    </main>
  );
}

export default Inicio;
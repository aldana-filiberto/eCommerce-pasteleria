import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/DetallesProducto.css';

const DetalleProducto = () => {
    const { productos, agregarProducto } = useContext(CartContext)
    const { id } = useParams();
    const producto = productos.find(producto => producto.id == id);

    if (!producto) {
        return <p style={{ textAlign: 'center', marginTop: '2rem', color: 'red' }}>Producto no encontrado</p>;
    }

    return (
        <div className="detalle-producto">
            <img src={producto.imagen} alt={producto.nombre} className="imagen-detalle" />
            <div className="info-detalle">
                <h2>{producto.nombre}</h2>
                <p><strong>Descripción:</strong> {producto.descripcion}</p>
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <p><strong>Stock disponible:</strong> {producto.stock}</p>

                <button onClick={() => agregarProducto(producto)} className="btn-agregar">
                    Agregar al carrito
                </button>

                <Link to="/productos" className="btn-volver">
                    Volver a productos
                </Link>
            </div>
        </div>
    );
};

export default DetalleProducto;


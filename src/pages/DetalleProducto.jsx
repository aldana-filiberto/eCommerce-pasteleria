import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import '../styles/DetallesProducto.css';

const DetalleProducto = () => {
    const { agregarProducto } = useContext(CartContext);
    const { productos } = useContext(ProductContext);
    const { id } = useParams();
    const producto = productos.find(producto => producto.id == id);
    const navigate = useNavigate();

    if (!producto) {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <div className="detalle-producto">
            <div className="detalle-card">
                <img src={producto.imagen} alt={producto.nombre} className="imagen-detalle" />
                <div className="info-detalle">
                    <h2>{producto.nombre}</h2>
                    <p className="descripcion">{producto.descripcion}</p>
                    <p className="precio">${producto.precio}</p>
                    <p className="stock">Stock disponible: {producto.stock}</p>

                    <div className="botones-detalle">
                        <button onClick={() => agregarProducto(producto, 1)} className="btn btn-rosa">
                            Agregar al carrito
                        </button>
                        <button className="btn btn-volver" onClick={() => navigate(-1)}>
                            Volver
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;

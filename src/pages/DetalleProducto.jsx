import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import '../styles/DetallesProducto.css';

const DetalleProducto = () => {
    const {agregarProducto } = useContext(CartContext);
    const { productos } = useContext(ProductContext);
    const { id } = useParams();
    const producto = productos.find(producto => producto.id == id);
    const navigate = useNavigate();

    if (!producto) {
        return  <Navigate to="/not-found" replace />
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
                <button className="btn-agregar" onClick={()=>navigate(-1)}> Volver </button>
            </div>
        </div>
    );
};

export default DetalleProducto;


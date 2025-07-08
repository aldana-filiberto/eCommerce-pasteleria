import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Productos.css';

const ProductCard = ({ producto }) => {
    const { agregarProducto } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const increase = () => {
        if (cantidad < producto.stock) {
            setCantidad(prev => prev + 1);
        }
    };

    const decrease = () => {
        setCantidad(prev => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <div className='product-card'>

            <div className='product-content'>
                <img src={producto.imagen} />
                <span> <strong>{producto.nombre}</strong> </span>
                <span> ${producto.precio} </span>
            </div>

            <div className='select-cantidad'>
                <button onClick={decrease}>-</button>
                <p>{cantidad}</p>
                <button onClick={increase}>+</button>
            </div>

            <div className="product-actions">
                <button className='addCart' onClick={() => agregarProducto(producto, cantidad)}>Agregar al Carrito</button>
                <Link className='details' to={`/productos/${producto.id}`}> Ver detalle</Link>
            </div>
        </div>
    );
};

export default ProductCard;

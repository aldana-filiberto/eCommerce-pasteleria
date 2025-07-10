import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/productCard.css';

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
                <button
                    onClick={decrease}
                    className={cantidad === 1 ? 'boton-desactivado' : 'boton-activo'}
                >-</button>

                <p style={{ marginBottom: '0' }}>{cantidad}</p>

                <button
                    onClick={increase}
                    className={cantidad === producto.stock ? 'boton-desactivado' : 'boton-activo'}
                >+</button>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'gray', marginBottom: '3%' }}> {producto.stock} disponibles</p>

            <div className="product-actions">
                <button className='addCart' onClick={() => agregarProducto(producto, cantidad)}>Agregar al Carrito</button>
                <Link className='details' to={`/productos/${producto.id}`}> Ver detalle</Link>
            </div>
        </div>
    );
};

export default ProductCard;

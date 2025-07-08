import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import '../../styles/Carrito.css'

const Carrito = () => {

    const { carrito, vaciarCarrito, borrarProducto, isCartOpen, setCartOpen } = useContext(CartContext)

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Carrito de Compras</h2>
                <button onClick={() => setCartOpen(false)} className="close-button">×</button>
            </div>

            <button className="vaciar-btn" onClick={vaciarCarrito}>Vaciar carrito</button>

            <div className="cart-content">
                {carrito.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito esta vacío</p>
                ) : (
                    <div className="cart-items">
                        {carrito.map((item) => (
                            <div key={item.id} className="cart-item">

                                <div className='col'>
                                    <img src={item.imagen} alt={item.nombre} />
                                </div>

                                <div className='col'>
                                    <p>{item.nombre}</p>
                                    <p>${item.precio}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <button className="deleteProduct" onClick={() => borrarProducto(item.id)}>Eliminar</button>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="cart-total">
                <p>Total: ${carrito.length === 0 ? 0 : total}</p>
            </div>
        </div>

    )
}

export default Carrito


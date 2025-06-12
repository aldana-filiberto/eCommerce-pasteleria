import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import '../styles/Carrito.css'

const Carrito = () => {

    const {carrito, vaciarCarrito, borrarProducto, isCartOpen, setCartOpen } = useContext(CartContext)

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>

            <div className='cart-header'>
                <h2 style={{ fontFamily: 'Roboto', fontSize: '3em', color: 'black' }}>Carrito de Compras</h2>
                <button onClick={() => setCartOpen(false)} className='close-button'> X </button>
            </div>
            <div>
                <button style={{ margin: '10px' }} onClick={vaciarCarrito}> Vaciar carrito</button>
            </div>

            <div className='cart-content'>
                {carrito.length === 0 ? (<p style={{ color: 'red' }}>El carrito esta vacío</p>) : (<div className="cart-items">
                    {carrito.map((item) => (
                        <div key={item.id} className="cart-item" style={{ color: 'black' }}>
                            <div>
                                <img style={{ borderRadius: '8px' }} src={item.imagen} alt={item.nombre} width={120} height={100} />
                                <p>{item.nombre}</p>
                                <p>${item.precio}</p>
                            </div>
                            <div>
                                <p>Cantidad: {item.cantidad}</p>
                                <button onClick={() => borrarProducto(item.id)}>x</button>
                            </div>
                        </div>
                    ))}
                </div>)}

            </div>

            <div className="cart-total" style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {carrito.length === 0 ? (<p>Total: $0 </p>) : (<p>Total: ${total}</p>)}
            </div>

        </div>
    )
}

export default Carrito


import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { RiDeleteBinLine } from "react-icons/ri";
import '../../styles/Carrito.css'

const Carrito = () => {

    const { carrito, vaciarCarrito, borrarProducto, isCartOpen, setCartOpen, confirmarCompra, disminuirCantidad, aumentarCantidad } = useContext(CartContext)

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);



    return (
        <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <div >
                    <h2 className='cart-title'>Carrito de Compras</h2>
                    <button onClick={() => setCartOpen(false)} className="close-button">×</button>
                </div>
            </div>


            <div className="cart-content">
                {carrito.length === 0 ? (
                    <p style={{ color: 'red', textAlign: 'center' }}>El carrito esta vacío</p>
                ) : (
                    <div className="cart-items">
                        <button className="vaciar-btn" onClick={vaciarCarrito}> <RiDeleteBinLine />Eliminar carrito</button>
                        {carrito.map((item) => (
                            <div key={item.id} className="cart-item">

                                <div className='col'>
                                    <img src={item.imagen} alt={item.nombre} />
                                </div>

                                <div className='col'>
                                    <p>{item.nombre}</p>
                                    <p>${item.precio}</p>
                                    <div className='select-cantidad-carrito'>
                                        <button
                                            className={item.cantidad === 1 ? 'btn-desactivado-cart' : 'btn-activo-cart'}
                                            onClick={() => disminuirCantidad(item.id)}
                                        >-</button>

                                        <p style={{ marginBottom: '0' }}>{item.cantidad}</p>

                                        <button
                                            className={item.cantidad === item.stock ? 'btn-desactivado-cart' : 'btn-activo-cart'}
                                            onClick={() => aumentarCantidad(item.id)}
                                        >+</button>
                                    </div>

                                    <p style={{ fontSize: '0.8rem', color: 'gray', marginBottom: '3%' }}> {item.stock} disponibles</p>
                                    <button className="deleteProduct" onClick={() => borrarProducto(item.id)}><RiDeleteBinLine /></button>
                                </div>


                            </div>
                        ))}
                    </div>
                )}

            </div>
            <div className="cart-total">
                <p>Total: ${carrito.length === 0 ? 0 : total}</p>
                <button onClick={confirmarCompra} style={carrito.length === 0 ? { backgroundColor: '#7c6c7d', cursor: 'not-allowed' } : { backgroundColor: '#960886' }} disabled={carrito.length === 0} className='btn-compra'>Finalizar compra</button>
            </div>
        </div>

    )
}

export default Carrito


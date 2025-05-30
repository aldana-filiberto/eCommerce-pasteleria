import React from 'react'
import Header from '../componentes/Header'

const Carrito = ({ carrito, agregarProducto, borrarProducto, vaciarCarrito }) => {
    return (
        <div>
            <Header carrito={carrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />

        </div>
    )
}

export default Carrito

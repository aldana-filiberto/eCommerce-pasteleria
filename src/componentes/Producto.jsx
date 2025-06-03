import React from 'react'
import { Link } from 'react-router-dom'

const Producto = ({ producto, agregarProducto }) => {

    return (
        <div className='tarjeta'>
            <img src={producto.imagen} alt="torta" />
            <span> <strong>{producto.nombre}</strong> <br /> ${producto.precio}</span>
            <button style={{ backgroundColor: '#0ef45e' }} onClick={() => agregarProducto(producto)}>Agregar al Carrito</button>
            <Link to={`/productos/${producto.id}`}> Ver mas</Link>

        </div>
    )
}
export default Producto

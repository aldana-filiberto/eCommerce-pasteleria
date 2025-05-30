import React from 'react'

const Producto = ({ producto, agregarProducto }) => {

    return (
        <div className='tarjeta'>
            <img src={producto.imagen} alt="torta" />
            <span> <strong>{producto.nombre}</strong> <br /> ${producto.precio}</span>
            <button onClick={() => agregarProducto(producto)}>Agregar al Carrito</button>

        </div>
    )
}
() => siguienteImg(param)
export default Producto

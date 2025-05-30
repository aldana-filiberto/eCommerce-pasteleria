import React from 'react'
import Header from '../componentes/Header'
import ListaProductos from '../componentes/ListaProductos'
import Footer from '../componentes/Footer'
import '../styles/Nav.css'
import '../styles/Footer.css'

const Productos = ({ carrito, agregarProducto, borrarProducto, vaciarCarrito, filtros }) => {

    let style = {
        maxWidth: '800px',
        margin: '10px auto',
        fontFamily: 'Tangerine',
        fontSize: '3.5em',
        color: '#d94f70',
        marginBottom: '20px',


    }

    return (
        <div>
            <Header carrito={carrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />
            <h3 className='titulo-dibujado' style={style}>Pasteleria</h3>
            <ListaProductos agregarProducto={agregarProducto} filtro={{ nombre: '', tipo: 'pasteleria', masVendido: undefined }} />
            <h3 className='titulo-dibujado' style={style} >Panaderia</h3>
            <ListaProductos agregarProducto={agregarProducto} filtro={{ nombre: '', tipo: 'panaderia', masVendido: undefined }} />
            <Footer />

        </div>
    )
}

export default Productos

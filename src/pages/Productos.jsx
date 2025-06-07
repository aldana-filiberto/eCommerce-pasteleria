import React from 'react'
import Header from '../componentes/Header'
import ListaProductos from '../componentes/ListaProductos'
import Footer from '../componentes/Footer'
import '../styles/Nav.css'
import '../styles/Footer.css'

const Productos = () => {

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
            <Header />
            <h3 className='titulo-dibujado' style={style}>Todos nuestros productos</h3>
            <ListaProductos tipo={''} nombre={''} masVendido={undefined}  />
            <Footer />

        </div>
    )
}

export default Productos

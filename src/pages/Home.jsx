import React from 'react'
import Header from '../componentes/Header'
import Main from '../componentes/Main'
import Footer from '../componentes/Footer'

const Home = ({ carrito, agregarProducto, borrarProducto, vaciarCarrito }) => {


    return (
        <div>
            <Header carrito={carrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />
            <Main agregarProducto={ agregarProducto} />
            <Footer   />

        </div>
    )
}

export default Home

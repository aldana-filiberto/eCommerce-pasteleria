import React from 'react'
import Header from '../componentes/Header'
import Main from '../componentes/Main'
import Footer from '../componentes/Footer'

const Home = ({productos, carrito, agregarProducto, borrarProducto, vaciarCarrito, cargando, error, setFiltros }) => {


    return (
        <div>
            <Header productos={productos} carrito={carrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />
            <Main productos={productos} agregarProducto={agregarProducto} cargando={cargando} error={error} setFiltros={setFiltros}  />
            <Footer />
        </div>
    )
}

export default Home

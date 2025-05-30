import React, { useState, useEffect } from 'react'
import Nav from '../componentes/nav'
import '../styles/Header.css'

const Header = ({ carrito, borrarProducto, vaciarCarrito }) => {

    return (
        <header>
            <Nav carrito={carrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />
        </header>
    )
}

export default Header

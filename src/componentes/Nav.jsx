import React from 'react'
import '../styles/Nav.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import pastel from '../assets/iconos/pastel2.png'
import login from '../assets/iconos/login.svg'
import carritoIco from '../assets/iconos/carrito.svg'
import Carrito from './Carrito'


const Nav = () => {

    const {isCartOpen, setCartOpen} = useContext(CartContext)

    return (
        <nav>

            <div className="div-logo-pastel">
                <img src={pastel} alt="Pastelería Dulce" className="logo" width={100} height={300} />
                <h1 >Cake <br />Bakery</h1>
            </div>

            <div className='div-pages'>
                <ul>
                    <li><Link className='pages' to="/" >Home</Link></li>
                    <li><Link className='pages' to="/productos">Productos</Link></li>
                    <li><Link className='pages' to="/carrito">Carrito</Link></li>
                </ul>
            </div>

            <div className='div-logo-user-carrito'>
                <Link to= "/login"><img src={login} className='logos-nav' /></Link>
                <img src={carritoIco} className='logos-nav'  onClick={()=> setCartOpen(true)} />
                <Link to="/admin"> Admin </Link>
                <Carrito />
            </div>

        </nav>
    )
}

export default Nav

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdExit } from "react-icons/io";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import Carrito from './Carrito'
import '../../styles/Nav.css'


const Nav = () => {

    const { isAuth, setIsAuth, role, setRole } = useContext(AuthContext);
    const { setCartOpen } = useContext(CartContext)
    const navigate = useNavigate();


    const salir = () => {
        setIsAuth(false);
        setRole('');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('role');
        // navigate('/');
    }

    return (
        <nav>

            <div className="div-logo">
                <img src='./pastel2.png' alt="Pastelería Dulce" width={50} height={80} />
                <h1 >Cake <br />Bakery</h1>
            </div>

            <div className='div-pages'>
                <ul>
                    <li><Link className='page' to="/" >Home</Link></li>
                    <li><Link className='page' to="/productos">Productos</Link></li>
                    <li><Link className='page' to="/contacto">Contacto</Link></li>
                </ul>
            </div>

            <div className='div-icons'>
                {(isAuth)
                    ? (
                        (role === 'client')
                            ? (
                                <>
                                    <button className='nav-icon' onClick={() => setCartOpen(true)} > <FaShoppingCart /> </button>
                                    <button className='nav-icon' onClick={salir}> <IoMdExit /></button>
                                    <Carrito />
                                </>
                            ) : (
                                <>
                                    <Link  className='nav-icon' to="/admin"> <MdAdminPanelSettings /> </Link>
                                    <button className='nav-icon' onClick={() => setCartOpen(true)} > <FaShoppingCart /> </button>
                                    <button className='nav-icon' onClick={salir}> <IoMdExit /></button>
                                    <Carrito />
                                </>
                            )
                    )
                    : (
                        <Link to="/login" className='nav-icon'> <FaUser /> </Link>
                    )
                }
            </div>

        </nav>
    )
}

export default Nav

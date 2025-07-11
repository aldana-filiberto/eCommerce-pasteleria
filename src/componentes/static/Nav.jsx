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
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-3">

                <div className="div-logo navbar-brand d-flex align-items-center">
                    <img src='./pastel2.png' alt="Pastelería Dulce" width={50} height={80} />
                    <h1>Cake <br />Bakery</h1>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="menuNav">

                    <div className="div-pages mx-auto">
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center">
                            <li className="nav-item">
                                <Link className="page nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="page nav-link" to="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="page nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="div-icons d-flex align-items-center">
                        {isAuth ? (
                            role === 'client' ? (
                                <>
                                    <button className='nav-icon' onClick={() => setCartOpen(true)}><FaShoppingCart /></button>
                                    <button className='nav-icon' onClick={salir}><IoMdExit /></button>
                                    <Carrito />
                                </>
                            ) : (
                                <>
                                    <Link className='nav-icon' to="/admin"><MdAdminPanelSettings /></Link>
                                    <button className='nav-icon' onClick={() => setCartOpen(true)}><FaShoppingCart /></button>
                                    <button className='nav-icon' onClick={salir}><IoMdExit /></button>
                                    <Carrito />
                                </>
                            )
                        ) : (
                            <Link to="/login" className='nav-icon'><FaUser /></Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav

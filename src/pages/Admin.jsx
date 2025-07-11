import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { AdminContext } from '../context/AdminContext';
import { useNavigate, Link } from 'react-router-dom';
import { IoMdExit } from "react-icons/io";
import spinner from '../assets/iconos/loading.gif'
import FormularioProducto from "../componentes/FormularioProducto";
import FormularioEdicion from "../componentes/FormularioEdicion";
import '../styles/admin.css';
import CuadroBusqueda from '../componentes/CuadroBusqueda';
import ListaProductos from '../componentes/ListaProductos';
import AdminCard from '../componentes/AdminCard';


const Admin = () => {

    const { setIsAuth, setRole } = useContext(AuthContext);
    const {
        loading,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        agregarProducto,
        actualizarProducto
    } = useContext(AdminContext);

    const navigate = useNavigate();
    const salir = () => {
        navigate('/');
        setIsAuth(false);
        setRole('');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('role');
    };


    return (
        <div className='container-admin'>
            <nav className='nav-admin'>
                <ul style={{ listStyle: 'none' }}>
                    <li className="navItem">
                        <button> <Link to='/'> Home </Link> </button>
                        <button onClick={salir}> <IoMdExit /></button>
                    </li>
                </ul>
            </nav>
            {loading ? (
                <div className="spinner-container">
                    <img className='spinner' src={spinner} alt="Cargando..." width={80} height={80} />
                </div>
            ) : (
                <>
                    <h1 className="title">Panel Administrativo</h1>
                    <CuadroBusqueda />
                    <ListaProductos Component={AdminCard} cantidadItems={6} />

                </>

            )}
            <button className="btn-flotante" onClick={() => setOpen(true)}>+</button>

            {open && !openEditor && (
                <div className="window-overlay">
                    <div className="window">
                        <button className="modal-close" onClick={() => setOpen(false)}>✖</button>
                        <FormularioProducto onAgregar={agregarProducto} />
                    </div>
                </div>
            )}

            {openEditor && (
                <div className="window-overlay">
                    <div className="window">
                        <button className="modal-close" onClick={() => setOpenEditor(false)}>✖</button>
                        <FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Admin


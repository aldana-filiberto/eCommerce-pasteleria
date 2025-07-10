import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext';
import '../styles/adminCard.css';

const AdminCard = ({ producto }) => {
    const { setOpenEditor, setSeleccionado, eliminarProducto } = useContext(AdminContext);

    return (
        <div className='admin-card'>

            <div className='card-content'>
                <img src={producto.imagen} alt={producto.nombre} />
                <span>{producto.nombre}</span>
                <span>${producto.precio}</span>
            </div>

            <div className='card-buttons'>
                <button className="editButton" onClick={() => {
                    setOpenEditor(true)
                    setSeleccionado(producto)
                }}>Editar</button>
                <button className="deleteButton" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
            
        </div>
    )
}

export default AdminCard

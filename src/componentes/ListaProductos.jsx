import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Producto from './Producto'
import '../styles/Productos.css';
import spinner from '../assets/iconos/loading.gif'

const ListaProductos = ({ tipo, nombre, masVendido }) => {

    const { productos, cargando, error, setFiltros } = useContext(CartContext)

    // useEffect(() => {
    //     setFiltros({ tipo, nombre, masVendido });
    // }, []);

    if (cargando) return <img src={spinner} alt="" width={80} height={80} />;
    if (error) return <p>{error}</p>;

    return (
        <section>
            <div className='listaTarjetas'>
                {productos.map((producto, index) => (
                    <Producto key={index} producto={producto} />
                ))}
            </div>
        </section>
    );
};

export default ListaProductos;


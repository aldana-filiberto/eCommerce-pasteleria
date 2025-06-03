import React, { useEffect } from 'react';
import Producto from './Producto'
import '../styles/Productos.css';
import spinner from '../assets/iconos/loading.gif'

const ListaProductos = ({ agregarProducto, productos, cargando, error, setFiltros, tipo, nombre, masVendido }) => {

    // console.log(productos)
    // console.log(Array.isArray(productos))

    useEffect(() => {
        setFiltros({ tipo, nombre, masVendido});
    }, []);

    if (cargando) return <img src={spinner} alt="" width={80} height={80} />;
    if (error) return <p>{error}</p>;

    return (

        <section>
            <div className='listaTarjetas'>
                {productos.map((producto, index) => (
                    <Producto key={index} producto={producto} agregarProducto={agregarProducto} />
                ))}
            </div>
        </section>
    );
};

export default ListaProductos;


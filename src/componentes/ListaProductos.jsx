import React, { useEffect, useState } from 'react';
import Producto from './Producto'
import '../styles/Productos.css';
import spinner from '../assets/iconos/loading.gif'

const ListaProductos = ({ agregarProducto, filtro = {} }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/productos.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar el archivo JSON');
                }
                return response.json();
            })
            .then((data) => {
                const productosFiltrados = data.filter((producto) => {
                    const porTipo = filtro.tipo ? producto.tipo === filtro.tipo : true;
                    const porNombre = filtro.nombre
                        ? producto.nombre.toLowerCase().includes(filtro.nombre.toLowerCase())
                        : true;
                    const porMasVendido = filtro.masVendido !== undefined
                        ? producto.masVendido === filtro.masVendido
                        : true;

                    return porTipo && porNombre && porMasVendido;
                });

                setTimeout(() => {
                    setProductos(productosFiltrados);
                    setCargando(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Error al cargar productos:', error);
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, [filtro]);

    if (cargando) return <img src={spinner} alt="" width={80} height={80}/> ;
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


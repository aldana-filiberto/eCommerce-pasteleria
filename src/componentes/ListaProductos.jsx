import { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import spinner from '../assets/iconos/loading.gif';
import SinResultados from './SinResultados';
import { Pagination } from 'react-bootstrap';
import '../styles/Productos.css';

import {useWindowWidth} from '../utils/useWindowWidht'

const ListaProductos = ({ Component, cantidadItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { cargando, error, productosFiltrados } = useContext(ProductContext);
    const [itemPerPage, setItemPerPage] = useState(cantidadItems);
    const width = useWindowWidth();

    
    useEffect(() => {
        if (width >= 2100) setItemPerPage(21);      
        else if (width >= 1440 && width < 2560) setItemPerPage(10);      
        else if (width >= 1024 && width <1440) setItemPerPage(9);      
        else if (width >= 768 && width < 1440) setItemPerPage(4);  
        else if (width >= 320 && width < 768) setItemPerPage(2);   
        else setItemPerPage(2);                     
        setCurrentPage(1); // resetea a la página 1 al cambiar cantidad
    }, [width]);
    
    useEffect(() => {
        setCurrentPage(1); 
    }, [productosFiltrados]);
    
    // const itemPerPage = cantidadItems;
    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentProducts = productosFiltrados.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(productosFiltrados.length / itemPerPage);



    return (
        <>
            {cargando ? (
                <div className="spinner-container">
                    <img className="spinner" src={spinner} alt="Cargando..." width={80} height={80} />
                    <p>{error}</p>
                </div>
            ) : (
                <>
                    {productosFiltrados.length !== 0 ? (
                        <section>
                            <div className='grid'>
                                {currentProducts.map((producto, index) => (
                                    <Component key={index} producto={producto} />
                                ))}
                            </div>
                        </section>
                    ) : (
                        <SinResultados />
                    )}
                </>
            )}

            {totalPages > 1 && (
                <Pagination className="justify-content-center" style={{display:'flex', flexWrap: 'wrap'}}>
                    <Pagination.Prev
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Pagination.Item
                            key={i + 1}
                            active={i + 1 === currentPage}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            )}
        </>
    );
};

export default ListaProductos;

import { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import spinner from '../assets/iconos/loading.gif';
import SinResultados from './SinResultados';
import { Pagination } from 'react-bootstrap';
import '../styles/Productos.css';

const ListaProductos = ({ Component, cantidadItems }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { cargando, error, productosFiltrados } = useContext(ProductContext);

    useEffect(() => {
    setCurrentPage(1); // volvemos a la primera página cuando cambian los productos filtrados
}, [productosFiltrados]);

    const itemPerPage = cantidadItems;
    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentProducts = productosFiltrados.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(productosFiltrados.length / itemPerPage);

    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '2rem',
    };

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
                            <div style={style}>
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
                <Pagination className="justify-content-center">
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

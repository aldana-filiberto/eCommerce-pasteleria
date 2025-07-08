import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import spinner from '../assets/iconos/loading.gif'
import '../styles/Productos.css'
import SinResultados from './SinResultados';

const ListaProductos = ({ Component}) => {

    const { cargando, error, productosFiltrados } = useContext(ProductContext);

    const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent:'center',
    flexWrap: 'wrap',
    padding: '2rem'
    }

    return (
        <>
            {(cargando) ? (
                <div className="spinner-container">
                    <img className='spinner' src={spinner} alt="Cargando..." width={80} height={80} />
                    <p>{error}</p>
                </div>

            ) : (
                <>
                    {(productosFiltrados.length != 0) ? (

                        <section>
                            <div style={style}>
                                {productosFiltrados.map((producto, index) => (
                                    <Component key={index} producto={producto} />
                                ))}
                            </div>
                        </section>
                    ) : (
                        <SinResultados />
                    )
                    }
                </>
            )}
        </>
    )
};

export default ListaProductos;


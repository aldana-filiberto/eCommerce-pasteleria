import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [filtros, setFiltros] = useState({ nombre: '', categoria: '', masVendido: false })
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://68642b2a88359a373e97b44f.mockapi.io/productos')
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setCargando(false);
            });
    }, []);

    useEffect(() => {
        const filtrados = productos.filter(producto => {
            const coincideNombre =
                filtros?.nombre === '' ||
                (
                    producto?.nombre &&
                    filtros?.nombre &&
                    producto.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())
                );
            const coincideCategoria = filtros.categoria === '' || producto.categoria === filtros.categoria;
            const coincideMasVendido = filtros.masVendido ? producto.masVendido === true : true;
            return coincideNombre && coincideCategoria && coincideMasVendido;
        });

        setCargando(true)
        setProductosFiltrados(filtrados);
        setTimeout(() => {
            setCargando(false);
        }, 2000);
    }, [filtros, productos]);


    return (
        <ProductContext.Provider value={{
            productos, setProductos, cargando, setCargando, error, setError, filtros, setFiltros, productosFiltrados, setProductosFiltrados
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext

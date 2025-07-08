import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [isCartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();

    const { isAuth } = useContext(AuthContext);

    const agregarProducto = (producto, cantidad) => {
        if (!isAuth) {
            navigate('/login')
        } else {
            const productoEnCarrito = carrito.find(item => item.id === producto.id);
            if (productoEnCarrito) {
                setCarrito(carrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                ));
            } else {
                setCarrito([...carrito, { ...producto, cantidad: cantidad }]);
            }
            toast.success(`¡El producto ${producto.nombre} se agregado al carrito!`);
        }
    };

    const borrarProducto = (id) => {
        const nuevoCarrito = carrito.map((item) => {
            if (item.id === id) {
                if (item.cantidad > 1) {
                    return { ...item, cantidad: item.cantidad - 1 };
                } else {
                    return null;
                }
            }
            return item;
        }).filter(item => item !== null);
        toast.error(`El producto se elimiado del carrito.`);
        setCarrito(nuevoCarrito);

    };

    const vaciarCarrito = () => {
        setCarrito([]);
        toast.error(`Se ha eliminado todos los productos del carrito.`);
    }

    return (

        <CartContext.Provider value={{ isCartOpen, carrito, cargando, error, setCargando, agregarProducto, borrarProducto, vaciarCarrito, setCartOpen }}>
            {children}
        </CartContext.Provider>

    )

}
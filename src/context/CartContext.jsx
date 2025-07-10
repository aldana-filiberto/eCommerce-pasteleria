import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [isCartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();

    const { isAuth } = useContext(AuthContext);

    const agregarProducto = (producto, cantidad) => {
        if (!isAuth) {
            navigate('/login')
        } else {
            const productoEnCarrito = carrito.find(item => item.id === producto.id);
            if (productoEnCarrito) {
                setCarrito(carrito.map(item => {
                    if (item.id === producto.id) {
                        const nuevaCantidad = item.cantidad + cantidad;
                        if (nuevaCantidad > item.stock) {
                            toast.warning(`Ya alcanzaste el stock máximo de ${item.stock} unidades para ${item.nombre}.`);
                            return { ...item, cantidad: item.stock };
                        } else {
                            return { ...item, cantidad: nuevaCantidad };
                        }
                    }
                    return item;
                }));
            } else {
                setCarrito([...carrito, { ...producto, cantidad: cantidad }]);
                toast.success(`¡El producto ${producto.nombre} se agregado al carrito!`);
            }

        }
    };

    const aumentarCantidad = (id) => {
        setCarrito(prevCarrito =>
            prevCarrito.map(item =>
                item.id === id
                    ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock) }
                    : item
            )
        );
    };

    const disminuirCantidad = (id) => {
        setCarrito(prevCarrito =>
            prevCarrito.map(item =>
                item.id === id
                    ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) }
                    : item
            )
        );
    };


    const borrarProducto = (id) => {
        const nuevoCarrito = carrito.filter(item => item.id !== id);
        setCarrito(nuevoCarrito);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    }
    const confirmarCompra = () => {
        setCarrito([]);
        Swal.fire({
            title: "¡Compra confirmada!",
            text: "En breve te enviaremos tu producto",
            icon: "success"
        });
    }

    return (

        <CartContext.Provider value={{
            isCartOpen, carrito, cargando, setCargando,
            agregarProducto, borrarProducto, vaciarCarrito, setCartOpen, confirmarCompra,
            disminuirCantidad, aumentarCantidad
        }}>
            {children}
        </CartContext.Provider>

    )

}
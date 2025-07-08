import { useEffect, useState, createContext, useContext } from "react";
import Swal from "sweetalert2";
import { ProductContext } from './ProductContext';

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)
    const apiUrl = 'https://68642b2a88359a373e97b44f.mockapi.io/productos';
    
    const {productos, setProductos} = useContext(ProductContext);

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()
            setProductos(data)
        } catch (error) {
            console.log('Error al cargar productos ', error);
        }
    }

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            Swal.fire({
                title: "¡Listo!",
                text: "Producto agregado correctamente!",
                icon: "success"
            });
            cargarProductos()
            setOpen(false)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al agregar el producto, intentálo más tarde.",
            });
        }
    }

    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
            if (!respuesta.ok) throw Error('Error al actualizar el producto')
            const data = await respuesta.json()
            Swal.fire({
                title: "¡Listo!",
                text: "Producto actualizado  correctamente!",
                icon: "success"
            });
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al actualizar el producto, intentálo más tarde.",
            });
        }
    }

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('Estas seguro de eliminar el producto?')
        if (confirmar) {
            try {
                const respuesta = await fetch(`${apiUrl}/${id}`, {
                    method: 'DELETE',
                })
                if (!respuesta.ok) throw Error('Error al eliminar')

                Swal.fire({
                    title: "¡Listo!",
                    text: "Producto eliminado correctamente.",
                    icon: "success"
                });
                cargarProductos()
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error al eliminar el producto, intentálo más tarde.",
                });
            }
        }
    }


    return (
        <AdminContext.Provider value={{
            productos,
            loading,
            open,
            setOpen,
            openEditor,
            setOpenEditor,
            seleccionado,
            setSeleccionado,
            agregarProducto,
            actualizarProducto,
            eliminarProducto
        }}>
            {children}
        </AdminContext.Provider>
    )
}


import { useState } from 'react';

function FormularioProducto({ onAgregar }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        stock: '',
        imagen: '',
        categoria: '',
        masVendido: false,
    });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.descripcion.trim()) {
            nuevosErrores.descripcion = 'La descripcion es obligatoria.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.stock || producto.stock <= 0) {
            nuevosErrores.stock = 'El stock debe ser mayor a 0.';
        }
        if (!producto.categoria.trim() || producto.categoria.length < 5) {
            nuevosErrores.categoria = 'La categoria debe tener al menos 5 caracteres.';
        }
        if (!producto.imagen.trim() || producto.imagen.length < 5) {
            nuevosErrores.imagen = 'La imagen debe tener al menos 5 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        onAgregar(producto); // Llamada a la función para agregar el producto
        setProducto({
            nombre: '',
            precio: '',
            descripcion: '',
            categoria: '',
            stock: '',
            imagen: '',
            masVendido: false,
        }); // Limpiar el formulario
    };

    return (


        <form className='form-agregar' onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre:</label>
                <input
                    type="text" name="nombre" value={producto.nombre} onChange={handleChange} />
                {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
            </div>
            <div>
                <label>descripcion:</label>
                <input
                    type="text" name="descripcion" value={producto.descripcion} onChange={handleChange}  />
                {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" value={producto.precio} onChange={handleChange}
                    min="0" />
                {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
            </div>

            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                />
                {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
            </div>
            <div>
                <label>Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                />
                {errores.imagen && <p style={{ color: 'red' }}>{errores.imagen}</p>}
            </div>
            <div>
                <label>Categoría:</label>
                <input
                    type="text"
                    name="categoria"
                    value={producto.categoria || ''}
                    onChange={handleChange}
                />
                {errores.categoria && <p style={{ color: 'red' }}>{errores.categoria}</p>}
            </div>
            <div>
                <label>Más Vendido:</label>
                <input
                    type="checkbox"
                    name="masVendido"
                    checked={producto.masVendido}
                    onChange={(e) =>
                        setProducto({ ...producto, masVendido: e.target.checked }) 
                    }
                />
                {errores.masVendido && <p style={{ color: 'red' }}>{errores.masVendido}</p>}
            </div>

            <button type="submit">Agregar Producto</button>
        </form>
    );
}

export default FormularioProducto;
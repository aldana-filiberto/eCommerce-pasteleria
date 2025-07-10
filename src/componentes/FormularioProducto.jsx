import { useState } from 'react';
import '../styles/formsAdmin.css';


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
        const { name, value, type } = e.target;
        setProducto({ ...producto, [name]: type === 'number' ? Number(value) : value });
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
        onAgregar(producto);
        setProducto({
            nombre: '',
            precio: '',
            descripcion: '',
            categoria: '',
            stock: '',
            imagen: '',
            masVendido: false,
        });
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
                <label>descripción:</label>
                <textarea
                    type="text"
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        height: '150px',
                        padding: '10px',
                        fontSize: '1rem',
                        border: '2px solid #ccc',
                        borderRadius: '8px',
                        resize: 'none',
                        outline: 'none'
                    }} />
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
                <select name="categoria" value={producto.categoria || ''} onChange={handleChange}>
                    <option value="pasteleria">Pastelería</option>
                    <option value="panaderia">Panadería</option>
                </select>
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
            </div>

            <button type="submit">Agregar Producto</button>
        </form>
    );
}

export default FormularioProducto;
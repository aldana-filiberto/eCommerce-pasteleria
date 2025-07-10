import React, { useState, useEffect } from 'react';
import '../styles/formsAdmin.css';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado);
    const [errores, setErrores] = useState({});

    useEffect(() => {
        setProducto(productoSeleccionado)
    }, [productoSeleccionado])

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
        onActualizar(producto)
    };

    const style = {
        color: 'red',
        margin: '0px',
        fontSize:'0.7rem'
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Editar Producto</h2>
            <div className='columnas'>
                <div className='col-form'>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={producto.nombre || ''}
                        onChange={handleChange}
                    />
                    {errores.nombre && <p style={style}>{errores.nombre}</p>}

                    <label>Imagen URL:</label>
                    <input
                        type="text"
                        name="imagen"
                        value={producto.imagen || ''}
                        onChange={handleChange}
                    />
                    {errores.imagen && <p style={style}>{errores.imagen}</p>}

                    <label>Precio:</label>
                    <input
                        type="number"
                        name="precio"
                        value={producto.precio || ''}
                        onChange={handleChange}
                        min="0"
                    />
                    {errores.precio && <p style={style}>{errores.precio}</p>}

                    <label>stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={producto.stock || ''}
                        onChange={handleChange}
                    />
                    {errores.stock && <p style={style}>{errores.stock}</p>}

                </div>


                <div className='col-form'>
                    <label>Descripción:</label>
                    <textarea
                        type="text"
                        name="descripcion"
                        value={producto.descripcion || ''}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            height: '50%',
                            padding: '10px',
                            fontSize: '1rem',
                            border: '2px solid #ccc',
                            borderRadius: '8px',
                            resize: 'none',
                            outline: 'none'
                        }}
                    />
                    {errores.descripcion && <p style={style}>{errores.descripcion}</p>}


                    <label>Categoría:</label>
                    <select name="categoria" value={producto.categoria || ''} onChange={handleChange}>
                        <option value="pasteleria">Pastelería</option>
                        <option value="panaderia">Panadería</option>
                    </select>


                    <div class="checkbox-group">
                        <label>Más Vendido:</label>
                        <input
                            type="checkbox"
                            name="masVendido"
                            checked={producto.masVendido}
                            onChange={(e) =>
                                setProducto({ ...producto, masVendido: e.target.checked }) // <-- Captura true/false
                            }
                        />
                    </div>
                </div>
            </div>
            <button className='btn-editar' type="submit">Actualizar Producto</button>
        </form >
    );
}
export default FormularioEdicion;
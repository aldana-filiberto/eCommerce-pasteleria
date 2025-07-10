import React, { useContext, useEffect } from 'react';
import { RiResetRightFill } from "react-icons/ri";
import { ProductContext } from "../context/ProductContext";
import '../styles/cuadroBusq.css';

const CuadroBusqueda = () => {
    const { filtros, setFiltros } = useContext(ProductContext);

    useEffect(() => {
        setFiltros({
            nombre: '',
            categoria: '',
            masVendido: false,
        });
    }, []);

    const handleFilter = (e) => {
        const { name, value, type, checked } = e.target;
        setFiltros(prevFiltros => ({
            ...prevFiltros,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFiltros({
            nombre: '',
            categoria: '',
            masVendido: false,
        });
    };

    return (
        <form className='form-buscar' onSubmit={handleSubmit}>
            <input
                type="text"
                name='nombre'
                value={filtros.nombre || ''}
                placeholder='Buscar producto...'
                onChange={handleFilter}
            />

            <select
                name="categoria"
                value={filtros.categoria || ''}
                onChange={handleFilter}
            >
                <option value="">Categoría</option>
                <option value="pasteleria">Pastelería</option>
                <option value="panaderia">Panadería</option>
            </select>

            <label className="checkbox-label">
                <input
                    type="checkbox"
                    name='masVendido'
                    checked={filtros.masVendido}
                    onChange={handleFilter}
                />
                Más Vendido
            </label>

            <button type='submit' title='Reiniciar filtros'>
                <RiResetRightFill />
            </button>
        </form>
    );
};

export default CuadroBusqueda;

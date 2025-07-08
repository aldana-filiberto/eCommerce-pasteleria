import React from 'react'
import '../styles/Productos.css';
import { RiResetRightFill } from "react-icons/ri";
import { ProductContext } from "../context/ProductContext";
import { useContext, useState, useEffect } from 'react';

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
        const { name, value } = e.target;
        setFiltros(prevFiltros => ({
            ...prevFiltros,
            [name]: value
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
        <div>

            <form className='form-buscar' onSubmit={handleSubmit}>
                <input type="text" name='nombre' value={filtros.nombre || ''} placeholder='Buscar producto...' onChange={handleFilter} />

                <div className="checkbox-container">
                    <label>Categoría:</label>
                    <select name="categoria" value={filtros.categoria || ''} onChange={handleFilter}>
                        <option value="">-</option>
                        <option value="pasteleria">Pastelería</option>
                        <option value="panaderia">Panadería</option>
                    </select>

                    <label>Más Vendido:</label>
                    <input type="checkbox" name='masVendido' checked={filtros.masVendido} onChange={(e) =>
                        setFiltros({
                            ...filtros,
                            masVendido: e.target.checked
                        })
                    } />
                    <button type='submit'><RiResetRightFill /></button>
                </div>
            </form>

        </div>
    )
}

export default CuadroBusqueda

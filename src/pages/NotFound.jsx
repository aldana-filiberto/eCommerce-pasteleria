import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>La ruta que estás buscando no existe.</p>
            <Link to="/" className="back-home">Volver al inicio</Link>
        </div>
    );
};

export default NotFound;

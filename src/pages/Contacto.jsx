import React from 'react';
import '../styles/Contacto.css';
import Header from '../componentes/static/Header'
import Footer from '../componentes/static/Footer'

const Contacto = () => {
    return (
        <>
            <Header />
            <div className="contacto-container ">
                <h2>Contacto</h2>
                <p className="intro-text">¿Tenés una duda o querés hacernos una consulta? ¡Escribinos!</p>
                <div className="contacto-content">
                    <form className="contacto-form col">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Tu nombre" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="tunombre@email.com" required />

                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" rows="5" placeholder="Escribí tu mensaje acá..." required />

                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="contacto-info ">
                    <h4>También podés comunicarte por:</h4>
                    <p><strong>Email:</strong> contacto@pasteleria.com</p>
                    <p><strong>WhatsApp:</strong> +54 9 11 1234 5678</p>
                    <p><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contacto;

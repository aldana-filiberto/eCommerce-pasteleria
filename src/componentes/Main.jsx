import React from 'react'
import { cargarImg, cargarImgProductos } from '../utils/dataSlider'
import Slider from './Slider'
import SobreNosotros from './SobreNosotros'
import ListaProductos from './ListaProductos'
import '../styles/Main.css';

const Main = ({ agregarProducto, productos, cargando, error, setFiltros }) => {
    const carruselImg = cargarImg(4);
    const imgProductos = cargarImgProductos(10);

    return (
        <main>
            <section className="sobre-nosotros">
                <div className='section'>
                    <SobreNosotros />
                    <h3>Eventos</h3>
                    <Slider carruselImg={carruselImg} ancho={700} alto={300} />
                </div>

                <div className='section'>
                    <h3>Nuestros Productos</h3>
                    <Slider carruselImg={imgProductos} ancho={300} alto={500} />
                </div>
            </section>

            <section>
                <h2>Nuestros productos mas vendidos</h2>
                <ListaProductos agregarProducto={agregarProducto} productos={productos} cargando={cargando} error={error} setFiltros={setFiltros}
                    tipo={''} nombre={''} masVendido={true} />
            </section>
        </main>
    )
}

export default Main

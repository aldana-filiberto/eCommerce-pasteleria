import React from 'react'
import flechaAtras from '../assets/flechas/atras.svg'
import flechaSig from '../assets/flechas/siguiente.svg'
import '../styles/Main.css'

const Slider = ({ carruselImg, ancho, alto}) => {

    const [imagenActual, setImagenActual] = React.useState(0);

    let cantidadImagenes = carruselImg.length;

    const siguienteImg = () => {
        setImagenActual(imagenActual === cantidadImagenes - 1 ? 0 : imagenActual + 1);
    }

    const previaImg = () => {
        setImagenActual(imagenActual === 0 ? cantidadImagenes - 1 : imagenActual - 1);
    }


    return (
        <div className='carrusel'>
            <img src={flechaAtras} className='atras' alt="atras" loading='lazy' width={50} height={50} onClick={previaImg} />
            {
                carruselImg.map((src, index) => (
                    <div key={index} className={imagenActual === index ? "slide active" : "slide"}>
                        {imagenActual == index && (
                            <img src={src} alt={`imagen${index + 1}`} width={ancho} height={alto} />
                        )}
                    </div>
                ))
            }
            <img src={flechaSig} className='siguiente' alt="siguiente" loading='lazy' width={50} height={50} onClick={siguienteImg} />
        </div>
    )
}

export default Slider


import { BiSad } from "react-icons/bi";
import "../styles/SinResultados.css";

const SinResultados = () => {
    return (
        <div className="sin-resultados">
            <BiSad className="icono-triste" />
            <h3>No se encontraron productos</h3>
            <p>Probá con otro nombre o categoría.</p>
        </div>
    );
};

export default SinResultados;

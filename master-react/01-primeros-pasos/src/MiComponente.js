// Importar modulos de React / dependencias
import Reactfrom, { Fragment } from "react";
// Funcion del componente

const MiComponente = () => {
    const nombre = "Jose";
    const web = "jrlecona.com"

    let usuario = {
        nombre: nombre,
        apellidos: "Lecona",
        web: web
    };
    return <div className="Mi-componente">
        <h2>Compenente Creado</h2>
        <h3> Datos de Usuario:</h3>
        <ul>
            <li>
                Nombre: <strong>{usuario.nombre}</strong>
            </li>
            <li>
                Apellidos: <strong>{usuario.apellidos}</strong>
            </li>
            <li>
                Web: <strong>{usuario.web}</strong>
            </li>
        </ul>
        <p> Este es mi componente testing </p>
        <ul>
            <li>
                React
            </li>
            <li>
                Angular
            </li>
            <li>
                Vue
            </li>
        </ul>

    </div>
};

// Export

export default MiComponente;
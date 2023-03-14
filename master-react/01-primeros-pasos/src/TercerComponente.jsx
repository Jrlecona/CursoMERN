import React from 'react'
import PropTypes from "prop-types"

export const TercerComponente = ({nombre, apellidos, ficha}) => {
  return (
    <div>
        <h2>Comunicacion entre componentes</h2>
        <ul> 
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    ficha: PropTypes.object
};
TercerComponente.defaultProps = {
    nombre: "Juan",
    apellidos: "Perez"

}
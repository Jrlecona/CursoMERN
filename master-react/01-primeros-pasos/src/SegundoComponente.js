import React from 'react'

export const SegundoComponente = () => {
    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"]

    return (
        <div className='segundo-componente'>
            <h2> Listado de Libros </h2>
            {libros.length >= 1 ? (
                <ul>
                    {libros.map((libro, indice) => {
                        return <li key={indice}>{libro}</li>;
                    })}
                </ul>
            ) : (
                <p> No hay Libros</p>
            )}

        </div>
    )
}

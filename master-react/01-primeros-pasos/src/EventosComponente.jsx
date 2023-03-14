import React from 'react'

export const EventosComponente = () => {
    const hasDadoClick = (e, nombre) => {
        alert("Hola " + nombre + ", has dado click al boton!!!");
    };
    function hasDadoDobleClick(e, nombre) {
        console.log("Hola " + nombre + ", has dado doble click al boton!!!");
    };

    const hasEntrado = (e, action) => {
        console.log(`Has ${action} a la caja con el mouse!!!`);
    }

    const estasDentro = e => {
        console.log("Estas dentro del input ");
    }

    const estasFuera = e =>{
        console.log("Estas fuera chao");
    }



    return (
        <div>
            <h1> Evnetos en React</h1>
            <p>
                {/* Evento click */}
                <button onClick={e => hasDadoClick(e, "José")}> Dame Click !!!</button>
            </p>
            <p>
                {/* Evento double click */}
                <button onDoubleClick={e => hasDadoDobleClick(e, "José")}> Dame doble Click !!!</button>
            </p>
            <div id="caja"
                onMouseEnter={ e => hasEntrado (e, "entrado") }
                onMouseLeave={ e => hasEntrado (e, "salido")  }
            >
                {/* Evento onMouseEnter onMouseLeave */}
                Pasa por la Caja!!!
            </div>

            <p>
                <input type="text" 
                       onFocus={ estasDentro } 
                       onBlur= {estasFuera}
                       placeholder="Introduce tu nombre..." />
            </p>
        </div>
    )
}

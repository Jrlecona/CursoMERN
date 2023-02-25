var nombre = 'Jose Lecona'
var altura = 170;

var concatenacion = nombre + " "  + altura;

function MuestraMisDatos (nombre, altura){
    var misDatos = `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre} <h2/>
    <h3> Mido: ${altura} cm<h3/>
    `;

    return misDatos;
};

function imprimir (){
    var datos = document.getElementById("datos");

    datos.innerHTML = MuestraMisDatos('Jose Ruben Lecona Cuevas', 170);
};

imprimir();

var nombres = ['Jose', 'Ruben', 'Martin'];

document.write("<h3>Listado de nombres</h3>");
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>' )
});

var coche = {
    modelo: "Renault Duster",
    maxima: 200,
    antiguedad: 2018,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    prop1: 'lorem ipsum'
};

document.write("<h1>" + coche.modelo + "</h1>");
coche.mostrarDatos();
console.log(coche);

var saludar = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let saludo = 'Hello world!!!!';
        saludo = false;
        if(saludo){
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado =>{
    alert(resultado);
})
.catch(err =>{
    alert(err);
});
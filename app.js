// form
let formulario = document.getElementById('formulario');
// inputs
let operador1 = formulario['operador1']
let operador2 = formulario['operador2']
let respuesta = document.getElementById('respuesta');

// botones
let sumar         = document.getElementById('suma');
let restar         = document.getElementById('resta');
let multiplicador = document.getElementById('multiplicador');
let divisor       = document.getElementById('divisor');
// let igual         = document.getElementById('igual');

sumar.addEventListener('click', suma, true);
restar.addEventListener('click', resta, true);
multiplicador.addEventListener('click', multiplicacion, true);
divisor.addEventListener('click', division, true);


// mejorar el codigo /
function suma(){
    console.log(`sumando`)
    let resultado =  parseInt(operador1.value) + parseInt(operador2.value);
    console.log(`El resultado es: \n ${resultado}`);

    return respuesta.value = resultado;
}
function resta(){
    console.log(`restando`)
    let resultado =  parseInt(operador1.value) - parseInt(operador2.value);
    console.log(`El resultado es: \n ${resultado}`);

    return respuesta.value = resultado;
}
function multiplicacion(){
    console.log(`multiplicando`)
    let resultado =  parseInt(operador1.value) * parseInt(operador2.value);
    console.log(`El resultado es: \n ${resultado}`);

    return respuesta.value = resultado;
}
function division(){
    console.log(`dividiendo`)
    let resultado =  parseInt(operador1.value) / parseInt(operador2.value);
    console.log(`El resultado es: \n ${resultado.toFixed(2)}`);

    return respuesta.value = resultado;
}


// codigo de stack overflow sobre decimales
// function trunc (x, posiciones = 0) {
//     var s = x.toString()
//     var l = s.length
//     var decimalLength = s.indexOf('.') + 1
//     var numStr = s.substr(0, decimalLength + posiciones)
//     return Number(numStr)
//   }
// revisar codigo para pasarlo como validador

// function map(operaciones){
//     const operadores = {sumar, restar, multiplicador, divisor}
    
//     if(operadores[operaciones]){
//         operadores[operaciones];
//     }else{
//         let alerta = 'ingrese un operador valido';
//         return alert(alerta)
//     }
// }

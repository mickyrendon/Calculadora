// form
let formulario = document.getElementById('formulario');
// inputs
let operador1 = formulario['operador1']
let operador2 = formulario['operador2']
let respuesta = document.getElementById('respuesta');

// botones
let sumar         = document.getElementById('suma');
let restar        = document.getElementById('resta');
let multiplicador = document.getElementById('multiplicador');
let divisor       = document.getElementById('divisor');
// let igual         = document.getElementById('igual');

sumar.addEventListener('click', suma, true);
restar.addEventListener('click', resta, true);
multiplicador.addEventListener('click', multiplicacion, true);
divisor.addEventListener('click', division, true);

// mejorar 
// function validator(){
 
// }
// validator()
operador1.addEventListener('keydown', catcher, true);
operador2.addEventListener('keydown', catcher, true);

function catcher(event){
    let key = event.wich || event.keyCode;
    let array = [4,50,51,52,53,54,55,56,57,48]
    for(i=0; i < array.length; i++){
           let newKey = array[i];
        if(key !== newKey){
            console.log('ingrese solo numeros');
        }else{
            console.log('valores validos');
        }
    }
       
    // let array = {
    //     key : 4,  key : 50,
    //     key : 51, key : 52, 
    //     key : 53, key : 54,
    //     key : 55, key : 56,
    //     key : 57, key : 48
    // };

    // if(array[operaciones]){
    //     // analizar codigo
    //     array[operaciones]();
    // }else{
    //     return alert('ingrese un operador valido, solo numeros');
    // }
    console.log(`tecla ${key}`);
}
// catcher()
// function catcher(event) {

//     var codigo = event.which || event.keyCode;

//     console.log("Presionada: " + codigo);
     
//     if(codigo === 13){
//       console.log("Tecla ENTER");
//     }

//     if(codigo >= 65 && codigo <= 90){
//       console.log(String.fromCharCode(codigo));
//     }

     
// }
if(isNaN(operador1.value) == true || isNaN(operador2.value) == true ){
    alert('ingrese solo valores numericos')
}else{
    console.log('valores permitidos');
}
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

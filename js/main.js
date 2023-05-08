

// Obtener referencias a los elementos HTML
const PRECIO = 14000000;
const btn = document.querySelector('#btn');
const cantidad = document.querySelector('#Cantidad');
const color = document.querySelector('#color');
const total = document.querySelector('#total');
const cantidadResult = document.querySelector('#cantidad');
const colorResult = document.querySelector('#colorResult');
const resultElement = document.querySelector('.color');

// Agregar un evento click al botón
btn.addEventListener('click', () => {
    // Obtener el valor de cantidad y color del usuario
    const cantidadInput = parseInt(cantidad.value);
    const colorInput = color.value;

    // Calcular el total multiplicando la cantidad por el precio
    const resultado = cantidadInput * PRECIO;

    // Actualizar el elemento HTML con el total calculado
    total.textContent = `$${resultado.toLocaleString()}`;

    // Actualizar los elementos HTML con la cantidad y color ingresados
    cantidadResult.textContent = cantidadInput;

    // Modificar la clase "result" y establecer el color de fondo
    resultElement.style.backgroundColor = colorInput;

});
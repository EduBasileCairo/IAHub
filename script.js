// Ejemplo de uso de funciones de la clase Math

// Generar un número aleatorio entre 1 y 10
var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio: " + numeroAleatorio);

// Calcular el valor absoluto de un número
var numeroNegativo = -5;
var valorAbsoluto = Math.abs(numeroNegativo);
console.log("Valor absoluto: " + valorAbsoluto);

// Calcular la raíz cuadrada de un número
var numero = 16;
var raizCuadrada = Math.sqrt(numero);
console.log("Raíz cuadrada: " + raizCuadrada);

// Calcular el seno de un ángulo en radianes
var anguloRadianes = Math.PI / 4; // 45 grados en radianes
var seno = Math.sin(anguloRadianes);
console.log("Seno: " + seno);

// Calcular el coseno de un ángulo en radianes
var coseno = Math.cos(anguloRadianes);
console.log("Coseno: " + coseno);

// Redondear un número hacia abajo
var numeroDecimal = 3.7;
var numeroRedondeadoAbajo = Math.floor(numeroDecimal);
console.log("Redondeo hacia abajo: " + numeroRedondeadoAbajo);

// Redondear un número hacia arriba
var numeroRedondeadoArriba = Math.ceil(numeroDecimal);
console.log("Redondeo hacia arriba: " + numeroRedondeadoArriba);

// Obtener el máximo de varios números
var numeros = [5, 8, 2, 10, 3];
var maximo = Math.max(...numeros);
console.log("Máximo: " + maximo);

// Obtener el mínimo de varios números
var minimo = Math.min(...numeros);
console.log("Mínimo: " + minimo);

// Calcular el cuadrado de un número
var numero = 5;
var cuadrado = Math.pow(numero, 2);
console.log("Cuadrado de " + numero + ": " + cuadrado);

// Calcular el cubo de un número
var numero2 = 3;
var cubo = Math.pow(numero2, 3);
console.log("Cubo de " + numero2 + ": " + cubo);

// Agregado

document.getElementById("demo").innerHTML = 5 + 6;

// Programa que pide al usuario dos valores de un triángulo (base y altura) 
// y calcule el área de dicho triángulo.


var base = Number(prompt("Introduzca la base: "));
var altura = parseInt(prompt("Introduzca la altura: "));

var area = (base*altura)/2;

alert("El área de un triángulo con base = " + base + " y altura = " + altura + " es " + area);

// Programa que pide al usuario dos valores de un triángulo (base y altura) 
// y calcule el área de dicho triángulo.

function calcularArea () {
var base = parseFloat(document.getElementById("base").value);
var altura = parseFloat(document.getElementById("altura").value);
if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, introduce valores válidos para la base y la altura.");
    return;
}
var area = (base*altura)/2;

document.getElementById("resultado").textContent = area.toFixed(2);
}
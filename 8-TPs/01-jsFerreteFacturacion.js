/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

let precio1;
let precio2;
let precio3;
let suma3precios;

precio1 = document.getElementById("txtIdPrecioUno").value;
precio1 = parseInt(precio1);

precio2 = document.getElementById("txtIdPrecioDos").value;
precio2 = parseInt(precio2);

precio3 = document.getElementById("txtIdPrecioTres").value;
precio3 = parseInt(precio3);

suma3precios = (precio1 + precio2 + precio3);

alert("el precio es: " + suma3precios);

}

function Promedio ()
{
	
let precio1;
let precio2;
let precio3;
let promed3precios;

precio1 = document.getElementById("txtIdPrecioUno").value;
precio1 = parseInt(precio1);

precio2 = document.getElementById("txtIdPrecioDos").value;
precio2 = parseInt(precio2);

precio3 = document.getElementById("txtIdPrecioTres").value;
precio3 = parseInt(precio3);

promed3precios = (precio1 + precio2 + precio3 / 3);

alert("el promedio es: " + promed3precios);

}

function PrecioFinal () 
{
	
let precio1;
let precio2;
let precio3;
let totalMasIva;

precio1 = document.getElementById("txtIdPrecioUno").value;
precio1 = parseInt(precio1);

precio2 = document.getElementById("txtIdPrecioDos").value;
precio2 = parseInt(precio2);

precio3 = document.getElementById("txtIdPrecioTres").value;
precio3 = parseInt(precio3);

totalMasIva = (precio1 + precio2 + precio3) * 1.21;

alert("el total mas IVA es: " + totalMasIva);

}







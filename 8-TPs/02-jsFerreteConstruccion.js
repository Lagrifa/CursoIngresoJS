/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  let largo;
  let ancho;
  let cantAlambreRectan;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;

  largo = parseInt(largo);
  ancho = parseInt(ancho);

  cantAlambreRectan = (largo * 2 + ancho * 2) * 3;

  alert("debe comprar " + cantAlambreRectan  + " metros de alambre");
}

function Circulo () 
{
	let radio;
	let cantAlambreCirc;

	radio = document.getElementById("txtIdRadio").value;

	radio = parseInt(radio);

	cantAlambreCirc = (2 * 3.14 * radio) * 3;

	alert("debe comprar " + cantAlambreCirc + " metros de alambre");
}

function Materiales () 
{
	let largo;
	let ancho;
	let cantBolsasCal;
	let cantBolsasCemento;
	let calcArea;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

  calcArea = (largo * ancho);
	cantBolsasCal = (calcArea * 3);
	cantBolsasCemento = (calcArea * 2);

	alert("segun las medidas debe comprar " + cantBolsasCal + " bolsas de cal");
	alert("segun las medidas debe comprar " + cantBolsasCemento + " bolsas de cemento");


}
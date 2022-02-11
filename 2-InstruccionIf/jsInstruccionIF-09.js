/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	var numRandom;
	var maximo = 10;
	var minimo = 1;

	numRandom = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numRandom);



}
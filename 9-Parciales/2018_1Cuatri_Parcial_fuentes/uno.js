/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo
 por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = parseInt(prompt("ingrese un ancho"));
	largo = parseInt(prompt("ingrese un largo"));

	perimetro = (ancho * 2) + (largo * 2);

	alert("el perimetro es: " + perimetro);
}

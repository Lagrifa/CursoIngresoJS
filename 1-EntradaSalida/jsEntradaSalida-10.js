/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/




/*
10 bis 
lo anterior mas.
se debe pedir el % por prompt
cambiamos la salida:
Mostrar por alert el importe, la cantidad del descuento, el importe con el descuento
ej: "El importe es 1000 la cantidad de descuento es 250 y el importe con el descuento es 750"
*/


function mostrarAumento()
{
	 let importe1;
     let resultDesc;
     let sueldoDesc;
     let porcentajeIngre;

     importe1 = document.getElementById("txtIdImporte").value;

     importe1 = parseInt(importe1);

     porcentajeIngre = prompt("ingrese");

     porcentajeIngre = parseInt(porcentajeIngre);
       
     resultDesc = (importe1 *porcentajeIngre /100);

     sueldoDesc = importe1 - resultDesc;

     alert("el importe ingresado es " + importe1 + " el descuento es " + resultDesc +  " y el importe con descuento es " + sueldoDesc);

     


}

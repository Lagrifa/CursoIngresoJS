/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	 let importe1;
     let resultDesc;
     let sueldoDesc;

     importe1 = document.getElementById("txtIdImporte").value;

     importe1 = parseInt(importe1);
       
     resultDesc = (importe1 * 0.25);

     sueldoDesc = importe1 - resultDesc;

     document.getElementById("txtIdResultado").value = sueldoDesc;
}

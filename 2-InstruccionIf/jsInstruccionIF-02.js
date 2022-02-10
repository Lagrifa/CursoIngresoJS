function mostrar()
{
	 
var edadIngresada;

edadIngresada = document.getElementById("txtIdEdad").value;

edadIngresada = parseInt(edadIngresada);

if(!(edadIngresada >= 18))
 {

 	alert("no sos mayor de edad");


 }


}
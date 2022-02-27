/*Al seleccionar un destino informar
 si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destinoIngresado

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case"Bariloche":
		case"Cataratas":
		case"Ushuaia":
		  alert("Hace frio");
		break;

		default:
		  alert("hace calor");
		break;

	}

}
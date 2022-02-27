/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

//Invierno (21 de junio a 20 de septiembre).

function mostrar()
{
	
	var meses

	meses = document.getElementById("txtIdMes").value;

	switch(meses)
	{
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		case"Enero":
		case"Febrero":
		case"Marzo":
		  alert("Ya paso el frio, ahora arma la pelopincho!!!");
		break;

		case"Julio":
		case"Agosto":
		  alert("Abrigate que hace alto ofri!!!");
		break;

		default:
		  alert("Falta poco para el invierno!!");
		break;
	}



}
/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	var meses

	meses = document.getElementById("txtIdMes").value;

	switch(meses)
	{
		case"Enero":
		  alert("Que comiences bien el año!!!!");
		break;

		case"Marzo":
		  alert("Arrancan las clases!!!");
		break;

		case"Julio":
		  alert("Se vienen las vacaciones!!!");  
		break;

		default:
		  alert("Felices fiestas!!!");
		break;  	
	}

	



}
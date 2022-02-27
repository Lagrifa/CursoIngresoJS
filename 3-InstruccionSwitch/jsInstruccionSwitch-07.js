/*Al selecionar un destino,
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destino;

	destino = document.getElementById("txtIdDestino").value;

	
	switch(destino)
	{
		case"Bariloche":
		  alert("Se encuentra al sur");
		break;

		case"Cataratas":
		  alert("Se encuentra al este");
		break;

		case"Ushuaia":
		  alert("Se encuentra al oeste");
		break;

		default:
		  alert("Se encuentra al norte");
		break;

	}
		
}
/*Ezequiel Lagrifa
"parcial 2018 punto 05"
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).hace mas calor*/

function mostrar()
{
	var ingresePlaneta;


	ingresePlaneta = prompt("ingrese un planeta");


	switch(ingresePlaneta)
	{
		case"tierra":
		  alert("Aca vivimos");
		break;

		case"mercurio":
		case"venus":
		case"marte":
		case"mercurio":
		  alert("Aca hace mas calor");
		break;

		case"urano":
		case"saturno":
		case"jupiter":
		  alert("Aca hace mas frio");
		break;

		default:
		  alert("Ingrese un planeta valido");
		break;
	}

}



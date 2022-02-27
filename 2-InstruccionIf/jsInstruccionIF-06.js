/*
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/


function mostrar()
{
	var edadIng;
	var edadMostrada;

	edadIng = parseInt(edadIng);
	edadIng = prompt("ingrese una edad");

	if(edadIng > 70)
	{
		edadMostrada = ("usted es anciano");
	}
	else
	{
		if(edadIng > 17 && edadIng < 71)
		{
			edadMostrada = ("usted es mayor de edad");
		}
		else
		{
			if(edadIng > 12 && edadIng < 18)
			{
				edadMostrada = ("usted es adolescente");
			}
			else
			{
				if(edadIng > 2 && edadIng < 13)
				{
					edadMostrada = ("usted es un niño");
				}
				else
				{
					if(edadIng >= 0 && edadIng < 4) // no es necesario por que es por descarte los numeros restantes.
					{
						edadMostrada = ("usted es un bebe");
					}			
				}
			}
		}
	}

	document.getElementById("txtIdEdad").value = edadMostrada;
}
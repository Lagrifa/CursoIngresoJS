/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	var numRandom;
	var maximo = 10;
	var minimo = 1;

	numRandom = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(numRandom > 8 && numRandom <11)
	{
		alert("EXELENTE! obtuvo de nota: " + numRandom);
	}
	else
	{
		if(numRandom > 4)
		{
			alert("APROBO! su nota es: " + numRandom);
		}
		else
		{
			alert("Vamos, la proxima podras, su nota es: " + numRandom);
		}
	}
}
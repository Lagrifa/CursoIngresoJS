/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	var variableUno;
	var variableDos;
	variableUno = document.getElementById('txtIdNombre').value;
	variableDos = document.getElementById('txtIdEdad').value;
	alert('mi nombre es ' + variableUno + ' y tengo ' + variableDos + ' años');
}

   
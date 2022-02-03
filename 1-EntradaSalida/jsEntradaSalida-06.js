/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	var mivariable;
	var mivariabletwo;
	var resultado;

	mivariable = document.getElementById('txtIdNumeroUno').value;
	mivariabletwo = document.getElementById('txtIdNumeroDos').value;

	mivariable = parseInt(mivariable);
	mivariabletwo = parseInt(mivariabletwo);

	resultado = mivariable + mivariabletwo

	alert(resultado);

	


}


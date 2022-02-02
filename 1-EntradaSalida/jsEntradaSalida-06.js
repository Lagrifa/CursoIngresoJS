/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var mivariable;
	var mivariabletwo
	mivariable = document.getElementById('txtIdNumeroUno').value;
	mivariabletwo = document.getElementById('txtIdNumeroDos').value;
	const parsed = parseInt(mivariable);
	const ropa = parseInt(mivariabletwo);
	alert(parsed + ropa);


	

}
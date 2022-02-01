/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var mivariable;
	//mivariable = '6s';
	//let mivariabletwo = 7;
	//mivariable = mivariable + mivariabletwo;
	//alert(mivariable);
	mivariable = document.getElementById('txtIdNumeroUno').value;
	mivariabletwo = document.getElementById('txtIdNumeroDos').value;
	const parsed = parseInt(mivariable);
	const ropa = parseInt(mivariabletwo);
	alert(parsed + ropa);


	

}
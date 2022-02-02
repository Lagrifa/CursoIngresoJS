/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var suma1;
	var suma2;
	suma1 = document.getElementById('txtIdNumeroUno').value;
	suma2 = document.getElementById('txtIdNumeroDos').value;
	const numero1= parseInt(suma1);
	const numero2= parseInt(suma2);
	alert(numero1 + numero2);

}

function restar()
{
	var resta1;
	var resta2;
	resta1 = document.getElementById('txtIdNumeroUno').value;
	resta2 = document.getElementById('txtIdNumeroDos').value;
	const numero1 = parseInt(resta1);
	const numero2 = parseInt(resta2);
	alert(numero1 - numero2);

}

function multiplicar()
{ 
	var multi1;
	var multi2;
	multi1 = document.getElementById('txtIdNumeroUno').value;
	multi2 = document.getElementById('txtIdNumeroDos').value;
	const numero1 = parseInt(multi1);
	const numero2 = parseInt(multi2);
	alert(numero1 * numero2);
}

function dividir()
{
	var div1;
	var div2;
	div1 = document.getElementById('txtIdNumeroUno').value;
	div2 = document.getElementById('txtIdNumeroDos').value;
	const numero1 = parseInt(div1);
	const numero2 = parseInt(div2);
	alert(numero1 / numero2);
}


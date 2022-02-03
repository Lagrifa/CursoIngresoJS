/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var suma1;
	var suma2;
	var resultSuma;

	suma1 = document.getElementById('txtIdNumeroUno').value;
	suma2 = document.getElementById('txtIdNumeroDos').value;

	suma1 = parseInt(suma1);
	suma2 = parseInt(suma2);

	resultSuma = suma1 + suma2;

	alert(resultSuma);

}

function restar()
{
	var resta1;
	var resta2;
	var resultResta;

	resta1 = document.getElementById('txtIdNumeroUno').value;
	resta2 = document.getElementById('txtIdNumeroDos').value;

	resta1 = parseInt(resta1);
	resta2 = parseInt(resta2);

	resultResta = resta1 - resta2;

	alert(resultResta);

}

function multiplicar()
{ 
	var multi1;
	var multi2;
	var resultMulti;

	multi1 = document.getElementById('txtIdNumeroUno').value;
	multi2 = document.getElementById('txtIdNumeroDos').value;

	multi1 = parseInt(multi1);
	multi2 = parseInt(multi2);

	resultMulti = multi1 * multi2;

	alert(resultMulti);
}

function dividir()
{
	var div1;
	var div2;
	var resultDivi;

	div1 = document.getElementById('txtIdNumeroUno').value;
	div2 = document.getElementById('txtIdNumeroDos').value;

	div1 = parseInt(div1);
	div2 = parseInt(div2);

	resultDivi = div1 / div2;

	alert(resultDivi);
}


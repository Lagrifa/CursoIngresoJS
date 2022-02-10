/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/


function mostrar()
{
	var edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);


	//    13       y   13
	//    v        y   v  =  v
	if(!(edad > 12 && edad < 18))
	{

		alert("sos adolescente");
	}

}

// si no 
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	var edad;
	var estadoCiv;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCiv = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCiv != "Soltero")
	{ 
         
	}
	else
	{
		if(edad > 17 && estadoCiv == "Soltero")
		{
            alert("es soltero y no es menor");
		}
	}


}

/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var ingreseProd;
	var tipo;
	var precio;
	var cantidad;
	var contador;
	var fabricante;

	contador = 0;


	while(contador < 5)
	{
		tipo = prompt("ingrese: barbijo, jabon o alcohol");
		
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt("reingrese: barbijo, jabon o alcohol");		
		}

		precio = prompt("ingrese precio entre $100 y $300");
		precio = parseInt(precio);

		while(precio > 99 && precio < 301)
		{
			precio = ("reingrese precio entre $100 y $300");
			precio = parseInt(precio);
		}

		cantidad = prompt("ingrese una cantidad, no puede ser 0 o negativo y no debe superar las 1000 unidades");
		cantidad = parseInt(cantidad);

		while(cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt("reingrese una cantidad, no puede ser 0 o negativo y no debe superar las 1000 unidades");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("ingrese marca");
		fabricante = prompt("ingrese fabricante");




		contador = contador + 1;
	}

	

}
	//precio = prompt("ingrese precio entre $100 y $300");
    //cantidad = prompt("ingrese cantidad entre 0 y 1000");
    //cantidad = parseInt(cantidad);
	//precio = parseInt(precio);
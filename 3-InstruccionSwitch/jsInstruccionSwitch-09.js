/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba
 tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene
 un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene
 un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/


function mostrar()
{
	var estadia;
	var precioSinDesc;
	var descuento;
	var estacion;
	var destino;
	var porcentaje;

	porcentaje = 0;
	estadia = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	switch(estacion)
	{
		case"Invierno":
		  switch(destino)  
		  {

			case"Bariloche":
			  porcentaje = 20;
			break;

			case"Mar del plata":
			  porcentaje = -20;
			break;

			default:
			  porcentaje = -10;
			break;

		  }
		  break;

		  case"Verano":
		   switch(destino)
		   {
		   	 case"Bariloche":
		   	   porcentaje = -20;
		   	 break;

		   	 case"Mar del plata":
		   	   porcentaje = 20;
		   	 break;

		   	 default:
		   	   porcentaje = 10;
		   	 break;
		   	 
		   }
		   break;

		   default:
		    switch(destino)
		    {
		      case"Cordoba":
		        porcentaje = 0;
		      break;

		      default:
		        porcentaje = 10;
		      break;


		    }
	}


	
	descuento = estadia * porcentaje / 100;
	precioFinal = estadia + descuento;

	alert("El precio de la estadia es: $" + precioFinal);
}
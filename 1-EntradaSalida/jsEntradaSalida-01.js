/*
1)Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe más barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.*/


function mostrar()
{
	var vendedor;
	var tipoProd;
	var cantProd;
	var importeVentas;
	var contador;
	var comision;
	var acumuladorVent;
	var acumuladorJuan;
	var acumuladorMaria;
	var acumuladorLucrecia;
	var promedioVentasVendedor;


	comision = 0;
	acumuladorVent = 0;
	acumuladorLucrecia = 0;
	acumuladorMaria = 0;
	acumuladorJuan = 0;
	contador = "si";

	while(contador == "si")
	{
		vendedor = prompt("ingrese un vendedor: juan, maria o lucrecia");

		while(vendedor != "juan" && vendedor != "maria" && vendedor != "lucrecia")
		{
			vendedor = prompt("reingrese un vendedor: juan, maria o lucrecia");
		}

		tipoProd = prompt("ingrese un producto: perfume, shampoo o maquillaje");

		while(tipoProd != "perfume" && tipoProd != "shampoo" && tipoProd != "maquillaje")
		{
			tipoProd = prompt("reingrese un producto: perfume, shampoo o maquillaje");
		}

		importeVentas = prompt("ingrese un importe mayor que $0");

		while(importeVentas <= 0)
		{
			importeVentas = prompt("reingrese un importe mayor que $0");
			acumuladorVent = acumuladorVent + importeVentas;
		}

		contador = prompt("desea continuar? ingrese si o no");
	}

	

	if(acumuladorVent > 4999 && acumuladorVent <10001)
	{
		comision = 15;
		acumuladorVent = acumuladorVent + comision;
	}

	if(comision < 10000)
	{
		comision = 20;
		acumuladorVent = acumuladorVent + comision;
	}
	else()
	{
		comision = 5;
		acumuladorVent = acumuladorVent + comision;
	}

	comision = (acumuladorVent * comision) /100;

	console.log("acumuladorVent");


}



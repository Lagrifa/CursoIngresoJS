/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
 	
    var preciolamparas;
    var marcas;
    var cantLamp;
    var descuento;
    var porcentaje;
    var precioSinDesc;
    var precioConDesc;
    var aumentoIIBB;
    var precioFinal;

    cantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marcas = document.getElementById("Marca").value;

    preciolamparas = 35;
    porcentaje = 0;
    precioSinDesc = preciolamparas * cantLamp;

    if(cantLamp > 5)
    {
        porcentaje = 50;
    }
    else 
    {
        if(cantLamp == 5)
        {
            if(marcas == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else 
            {
                porcentaje = 30;
            }
        }
        else 
        {
            if(cantLamp == 4) 
            {
                if(marcas == "ArgentinaLuz" || marcas == "FelipeLamparas") 
                {
                    porcentaje = 25;
                }
                else
                {
                    porcentaje = 20;
                }
            }
            else
            {
                if(cantLamp == 3)
                {
                    if(marcas == "ArgentinaLuz")
                    {
                        porcentaje = 15;
                    }
                    else 
                    {
                        if(marcas == "FelipeLamparas")
                        {
                            porcentaje = 10;
                        }
                        else
                        {
                            porcentaje = 5;
                        }
                    }
                }
            }     
        }
    }     

    descuento = precioSinDesc * porcentaje / 100;
    precioConDesc = precioSinDesc - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioConDesc;

    // "E"
    aumentoIIBB = precioConDesc * 10 / 100;
    precioFinal =  precioConDesc + aumentoIIBB;


    if(precioConDesc > 120)
    {
        alert("Usted pago: $" + precioFinal + " con $" + aumentoIIBB + " de IIBB incluidos");
    }   
    

}



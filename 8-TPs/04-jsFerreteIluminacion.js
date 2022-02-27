/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

//switch con switch
function CalcularPrecio () 

{
 	
    var preciolamparas;
    var marcas;
    var cantLamp;
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

    switch(cantLamp)
    {
        case"6":
          porcentaje = -50;
        break;
    }
    switch(cantLamp)
    {
        case"5":
        switch(marcas)
        {
            case"ArgentinaLuz":
              porcentaje = -40;
            break;

            default:
              porcentaje = -30;
            break;
        }
        break;
        switch(cantLamp)
        {
            case"4":
            switch(marcas)
            {
                case"ArgentinaLuz":
                case"FelipeLamparas":
                  porcentaje = -25;
                break;

                default:
                  porcentaje = -20;
                break;
            }
        }
        break;
        switch(cantLamp)
        {
            case"3":
            switch(marcas)
            {
                case"ArgentinaLuz":
                  porcentaje = -15;
                break;

                case"FelipeLamparas":
                  porcentaje = -10;
                break;

                default:
                  porcentaje = -5;
                break;
            }
        }
    }

    precioConDesc = precioSinDesc * porcentaje / 100;    
    precioFinal = precioConDesc + precioSinDesc;

       
    if(precioFinal > 120)
    {
        porcentaje = 10;
        aumentoIIBB = precioFinal * porcentaje / 100; 
        alert("Usted pago: $" + aumentoIIBB + " siendo IIBB el impuesto que pago");
    }
             
    
    document.getElementById("txtIdprecioDescuento").value = precioFinal; 
}   
   


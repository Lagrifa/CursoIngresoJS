/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/



/*Ezequiel Lagrifa
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/

function mostrarAumento()
{
     let importe1;
     let resultAumento;
     let sueldoAumento;
     let porcentajeIngre;

     importe1 = document.getElementById("txtIdSueldo").value;

     importe1 = parseInt(importe1);

     porcentajeIngre = prompt("ingrese porcentaje");

     porcentajeIngre = parseInt(porcentajeIngre);
       
     resultAumento = (importe1 * porcentajeIngre /100);

     sueldoAumento = importe1 + resultAumento;

     document.getElementById("txtIdResultado").value = sueldoAumento;

     


     





}    



/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
     let importe1;
     let resultAumento;
     let sueldoAumento;

     importe1 = document.getElementById("txtIdSueldo").value;

     importe1 = parseInt(importe1);
       
     resultAumento = (importe1 * 10 / 100);

     sueldoAumento = resultAumento + importe1;

     document.getElementById("txtIdResultado").value = sueldoAumento;

}    



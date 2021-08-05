/*
calculos esfera  4pir³/3 y su area es 4pir²
*/

var radioesfera = document.getElementById("text_esfera");
var calculoEsfera = document.getElementById("boton_resultado_esfera");
calculoEsfera.addEventListener("click",esfera);
var resultadoEsfera = document.getElementById("resultado_esfera");

function esfera()
{
    r = parseInt(radioesfera.value);
    var area = 4 * Math.PI * Math.pow(r,2);
    var volumen = (4 * Math.PI * Math.pow(r,3))/3;
    resultadoEsfera.innerHTML = "el resultado es: Area "+area +"<br/>" +" y volumen"+ volumen;
}
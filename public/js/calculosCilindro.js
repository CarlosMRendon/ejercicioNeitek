/*
calculos cilindro
*/
var radioCilindro = document.getElementById("text_cilindro_radio");
var alturaCilindro = document.getElementById("text_cilindro_altura");
var calculoCilindro = document.getElementById("boton_resultado_cilindro");
calculoCilindro.addEventListener("click",cilindro);
var resultadoCilindro = document.getElementById("resultado_cilindro"); 

function cilindro()
{
    r = parseInt(radioCilindro.value);
    h = parseInt(alturaCilindro.value);
    var area = 2*Math.PI*r*(r+h);
    console.log(area);
    var volumen = Math.PI* Math.pow(r,2) *h;
    console.log(volumen);
    resultadoCilindro.innerHTML = "el resultado es: <br/> Area: "+area + " <br/> Volumen"+ volumen;
}

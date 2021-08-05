var radioCono = document.getElementById("text_cono_radio");
var alturaCono =document.getElementById("text_cono_altura");
var botonCono = document.getElementById("boton_resultado_cono");
botonCono.addEventListener("click",cono);
var resultadoCono = document.getElementById("resultado_cono_recto");


function cono()
{
    r = parseInt(radioCono.value);
    h = parseInt(alturaCono.value);
    g = Math.sqrt(Math.pow(h,2)+ Math.pow(r,2));
    console.log(g);
    area = Math.PI * r + Math.PI * g;
    volumen = Math.PI * Math.pow(r,2) * h / 3;
    resultadoCono.innerHTML = "el resultado es :<br/> Area " + area + "<br/>" + "Volumen " + volumen;
}
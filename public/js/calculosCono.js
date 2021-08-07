var radioCono = document.getElementById("text_cono_radio");
var alturaCono =document.getElementById("text_cono_altura");
var botonCono = document.getElementById("boton_resultado_cono");
botonCono.addEventListener("click",cono);
var resultadoCono = document.getElementById("resultado_cono_recto");


function cono()
{
    r = parseInt(radioCono.value);
    h = parseInt(alturaCono.value);

    const data = {r, h};
    const options={
        method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
    };

    fetch('/cono', options).then(res =>res.json())
    .then(res=>{
        resultadoCono.innerHTML = "el resultado es: <br/> Area: "+res.Area +"<br/>" +"Volumen:"+ res.Volumen;
    });
}
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
    const data = {r};
    const options={
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };
    
    
    fetch('/esfera', options).then(res =>res.json())
    .then(res =>{
        resultadoEsfera.innerHTML = "el resultado es: <br/> Area: "+res.Area +"<br/>" +"Volumen:"+ res.Volumen;
    }
    
    );
    

    
    
}
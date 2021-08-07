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

    if(r>0 && h>0){

    
    const data = {r,h};
    const options={
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };
    
    
    fetch('/cilindro', options).then(res =>res.json())
    .then(res =>{
        resultadoCilindro.innerHTML = "el resultado es: <br/> Area: "+res.Area +"<br/>" +"Volumen:"+ res.Volumen;
    }
    
    );
    }else{
        alert("no puedes ingtresar valores negativos");
    }
}

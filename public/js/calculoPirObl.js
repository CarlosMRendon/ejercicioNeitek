var base1 = document.getElementById("base1_piramide_oblicua");
var base2 = document.getElementById("base2_piramide_oblicua");
var altura1 = document.getElementById("text_piramide_oblicua_altura1");
var altura2 = document.getElementById("text_piramide_oblicua_altura2");
var altura3 = document.getElementById("text_piramide_oblicua_altura3");
var altura4 = document.getElementById("text_piramide_oblicua_altura4");
var botonPirOb = document.getElementById("boton_resultado_piramide_oblicua");
botonPirOb.addEventListener("click",piraObli);
var resultadoPirOb = document.getElementById("resultado_piramide_oblicua");

function piraObli()
{
    b1 = parseInt(base1.value);
    b2 = parseInt(base2.value);
    h1 = parseInt(altura1.value);
    h2 = parseInt(altura2.value);
    h3 = parseInt(altura3.value);
    h4 = parseInt(altura4.value);

    const data ={b1,b2,h1,h2,h3,h4};
    const options={
        method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
    };

    fetch('/piramide', options).then(res =>res.json())
    .then(res=>{
        resultadoPirOb.innerHTML = "el resultado es: <br/> Area: "+res.Area +"<br/>" +"Volumen:"+ res.Volumen;
    })

    
}
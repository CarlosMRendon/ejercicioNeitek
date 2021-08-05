const cilindro = (req,res,next)=>{

    function cilindroOps()
    {
        r = parseInt(radioCilindro.value);
        h = parseInt(alturaCilindro.value);
        var area = 2*Math.PI*r*(r+h);
        console.log(area);
        var volumen = Math.PI* Math.pow(r,2) *h;
        console.log(volumen);
        resultadoCilindro.innerHTML = "el resultado es: <br/> Area: "+area + " <br/> Volumen"+ volumen;
    }
}
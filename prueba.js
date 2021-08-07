const { response } = require('express');
const express = require ('express');
const { request } = require('http');
const path = require("path");
var app = express(); 

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'))
app.use('/js',express.static(__dirname +'public/js'))
app.use('/images',express.static(__dirname +'public/images'))
app.use(express.json({limit:'1mb'}));



app.get ('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get ('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/cilindro.html',(req,res) => {
    res.sendFile(__dirname + "/cilindro.html");

});
app.post("/cilindro", function (req, res) {
    console.log(req.body.r);
    console.log(req.body.h);
    const data = req.body;
    const r = data.r;
    const h = data.h;
    if(r>0 && h>0)
    {
        var area = 2*Math.PI*r*(r+h);
        var volumen = Math.PI* Math.pow(r,2) *h;
        console.log(area);
        console.log(volumen)
        res.json({
            Area: area,
            Volumen: volumen
        });
    }else{
        res.json({
            Area: 'no puedes usar valroes negativos',
            Volumen: ''
        });
    }
    

});
app.get('/esfera.html',(req,res) => {
    res.sendFile(__dirname + "/esfera.html");
});
app.post('/esfera', (req,res) =>{
    console.log(req.body.r );
    const data = req.body;
    const radio = req.body.r;
    if(radio>0){

    
        var area = 4 * Math.PI * Math.pow(radio,2);
        var volumen = (4 * Math.PI * Math.pow(radio,3))/3;
        console.log(area);
        console.log(volumen);
        res.json({
            Area: area,
            Volumen: volumen
    });
    }else{
        res.json({
            Area: 'no puedes usar valores negativos',
            Volumen: ''
        });
    }
});
app.get('/conorecto.html',(req,res) => {
    res.sendFile(__dirname + "/conorecto.html");
});
app.post('/cono',(req,res) =>{
    console.log(req.body)
    const data= req.body;
    const r =data.r;
    const h = data.h;
    if(r>0 && h>0){
        g = Math.sqrt(Math.pow(h,2)+ Math.pow(r,2));
    console.log(g);
    area = Math.PI * r + Math.PI * g;
    volumen = Math.PI * Math.pow(r,2) * h / 3;
    res.json({
        Area: area,
        Volumen: volumen
    });
    }else{
        res.json({
            Area: 'no puedes usar valores negativos',
            Volumen: ''
        })

    }
});
app.get('/piramideoblicua.html',(req,res) => {
    res.sendFile(__dirname + "/piramideoblicua.html");
});
app.post('/piramide',(req,res)=>{
    console.log(req.body);
    const data = req.body;
    const b1 = data.b1;
    const b2 = data.b2;
    const h1 = data.h1;
    const h2 = data.h2;
    const h3 = data.h3;
    const h4 = data.h4;
    if(b1>0 && b2>0 && h1>0 && h2>0 && h3>0 && h4>0){
        areal = ((b1 *h1) / 2) + ((b2 * h2) / 2) + ((b1 * h3) / 2) + ((b2 * h4) / 2);
        areab = b1 * b2 ;
        areat = areal + areab;
        volumen = areab * h2 / 3;
        console.log(areal);
        console.log(areab);
        console.log(areat);
        res.json({
            Area: areat,
            Volumen: volumen
        });
    }else{
        res.json({
            Area: 'no puedes usar valores negativos' ,
            Volumen: ''
        });
    }
});

app.listen (3000);
console.log('La aplicacion ejecutando en http://localhost:3000')







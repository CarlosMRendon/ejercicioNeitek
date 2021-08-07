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
    var area = 2*Math.PI*r*(r+h);
    var volumen = Math.PI* Math.pow(r,2) *h;
    console.log(area);
    console.log(volumen)
    res.json({
        Area: area,
        Volumen: volumen
    });

});
app.get('/esfera.html',(req,res) => {
    res.sendFile(__dirname + "/esfera.html");
});
app.post('/esfera', (req,res) =>{
    console.log(req.body.r );
    const data = req.body;
    const radio = req.body.r;
    var area = 4 * Math.PI * Math.pow(radio,2);
    var volumen = (4 * Math.PI * Math.pow(radio,3))/3;
    console.log(area);
    console.log(volumen);
    res.json({
        Area: area,
        Volumen: volumen
    });
})
app.get('/conorecto.html',(req,res) => {
    res.sendFile(__dirname + "/conorecto.html");
});
app.get('/piramideoblicua.html',(req,res) => {
    res.sendFile(__dirname + "/piramideoblicua.html");
});

app.listen (3000);
console.log('La aplicacion ejecutando en http://localhost:3000')







const express = require ('express');
const path = require("path");
var app = express(); 

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'))
app.use('/js',express.static(__dirname +'public/js'))
app.use('/images',express.static(__dirname +'public/images'))



app.get ('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get ('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/cilindro.html',(req,res) => {
    res.sendFile(__dirname + "/cilindro.html");
});
app.post("/cilindro.html", function (req, res) {
    console.log(req.body.user.radio)
    console.log(req.body.user.altura)
});
app.get('/esfera.html',(req,res) => {
    res.sendFile(__dirname + "/esfera.html");
});
app.get('/conorecto.html',(req,res) => {
    res.sendFile(__dirname + "/conorecto.html");
});
app.get('/piramideoblicua.html',(req,res) => {
    res.sendFile(__dirname + "/piramideoblicua.html");
});

app.listen (3000);
console.log('La aplicacion ejecutando en http://localhost:3000')







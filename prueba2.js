const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser =require("body-parser");
const morgan = require("morgan");

const cilindro = require("./route/cilindro");
var jsonParser = bodyParser.json();
var urlencoded = bodyParser.urlencoded({extended: true});

app.use(cors());
app.use(morgan("dev"));

app.post("/cilindro",jsonParser,urlencoded, cilindro);

const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
});



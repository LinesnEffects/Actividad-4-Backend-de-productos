var express = require("express")
global.app = express()
var puerto = 3003;

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require("./routes.js")



app.listen(puerto, function(){
    console.log("servidor funcionando en puerto " + puerto)
})
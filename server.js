const express = require('express');
const path = require("path");

const app = express();

app.use(express.static(__dirname+"/dist/PROJECT-ANGULAR"))


app.get("/*",function(req,res){
    res.sendFile(path.join(__dirname+"/dist/PROJECT-ANGULAR/index.html"))
})

app.listen(process.env.PORT)
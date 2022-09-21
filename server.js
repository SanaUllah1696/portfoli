const express = require("express");
const bodyparser=require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){
    const data=req.body;
const v = confirm(data);
}
);

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("listen on >"+PORT+":");


});

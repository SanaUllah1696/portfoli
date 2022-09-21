const express = require("express");
const bodyparser=require("body-parser");

const app = express();



const urlencoder=app.use(express.urlencoded({extended:true}));

app.use(express.static('public'))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

});

app.post("/", function(req,res){
    var data=req.body;
    data=JSON.stringify(data)
    console.log(data);

    res.send("Thank you! <br> <br> <br>"+data);
    
          
}
);

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("listen on >"+PORT+":");


});

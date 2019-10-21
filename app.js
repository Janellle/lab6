const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public")); // to access images css/js/images/or any external file

//routes
app.get("/", function(req, res){
    
    //res.send("<h1>hello!</h1>");
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    
    //res.send("<h1>Mercury planet</h1>");
    console.log("In mercury route");
    res.render("mercury.ejs");
});

app.get("/venus", function(req, res){
    
    res.send("<h1>Venus planet</h1>");
});

app.get("/mars", function(req, res){
    
    res.send("<h1>Mars planet</h1>");
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Express server is running...");
});
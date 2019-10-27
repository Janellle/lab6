const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public")); // to access images css/js/images/or any external file

//routes
app.get("/", function(req, res){
    
    //res.send("<h1>hello!</h1>");
    console.log("In root route");
    res.render("index.ejs");
});

app.get("/mercury", function(req, res){
    
    //res.send("<h1>Mercury planet</h1>");
    console.log("In mercury route");
    res.render("mercury.ejs");
});

app.get("/venus", function(req, res){
    console.log("In venus route");
    res.render("venus.ejs");
});

app.get("/mars", function(req, res){
    console.log("In mars route");
    res.render("mars.ejs");
});

app.get("/neptune", function(req, res){
    console.log("In neptune route");
    res.render("neptune.ejs");
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Express server is running...");
});
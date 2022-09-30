
const { application } = require('express')
const express = require ('express');
const app = express();


app.use(express.static('curriculo'))
app.use("/view",express.static("view"))
app.use("/img",express.static("img"))
app.use("/css",express.static("css"))


app.get("/",function (req,res) {
    res.sendFile (__dirname +"/view/index.html")
 })
 app.get("/sobre",function (req,res) {
   res.sendFile (__dirname +"/view/sobre.html")
})
 app.get("/contato",function(req,res){
    res.sendFile (__dirname +"/view/contato.html")
 })
 app.get("/formacao",function(req,res){
    res.sendFile (__dirname +"/view/formação.html")
 })
 app.get("/projetos",function(req,res){
    res.sendFile (__dirname +"/view/projetos.html")
 })
 app.get("/welcome",function(req,res){
   res.sendFile (__dirname +"/view/welcome.html")
})


app.listen(8080,function(){
    console.log("servidor rodando na porta 8080");
})
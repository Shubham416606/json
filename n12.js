var fs=require("fs")
var url=require("url")
var addr="http://localhost:8080/default.html?name=xyz&age=21";
var q1=url.parse(addr,false)
var qdata=q1.query;
fs.writeFile("txt.txt",qdata,(err)=>
{
    console.log("complet")
})
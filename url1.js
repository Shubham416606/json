var http=require("http")
var url=require("url")
var addr="http://localhost:8080/defult.html?year=2025&month=april"
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    var q=url.parse(addr,true).query;
    var txt=q.year+"  "+q.month
    res.write(txt)
    res.end("url fetched");


}).listen(3050)
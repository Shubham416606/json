var http=require("http")
var url=require("url")
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    var q=url.parse(req.url,true).query;
    var txt=q.year+"  "+q.month
    res.write(txt)
    res.end();


}).listen(3006)
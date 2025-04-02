var http=require("http")
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1 style='color:red';>Main Html Page </h1>")
    res.end()
}).listen(3001)
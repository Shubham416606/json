var http=require("http")
http.createServer(function(req,res){
    res.write("heello word")
    res.end()
}).listen(3000)
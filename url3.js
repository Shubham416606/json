var http=require("http")
var url=require("url")
var server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    if(req.url=='/'){
        res.write('home page')
    }
    else if(req.url=='/about'){
        res.write("about page")
    }
    else{
        res.write("page not found")
    }
res.end()
})
server.listen(3000,()=>{
    console.log("3020")
})
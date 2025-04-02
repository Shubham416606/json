// msg /SERVER:306E-36 */TIME:60 "don't us anthor app"
var fs=require("fs")
fs.writeFile("t1.txt",'hii',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("written")
    }
})
fs.appendFile("t1.txt"," how are you",(err)=>{
    if(err){
        console.log("Error in append")

    }
    else{
        console.log("appended")
    }
});
fs.readFile("t1.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});
fs.rename("t1.txt","t2.txt",()=>{
    console.log("renamed")
});
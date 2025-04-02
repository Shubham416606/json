var fs=require("fs")
fs.writeFileSync('test.txt','helooo')
console.log('completed')
console.log('test')
fs.writeFile("test.txt",'hii',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("com...")
    }
});
console.log("out")
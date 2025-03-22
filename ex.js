// one file content to two file
const f1=require("fs");
f1.mkdirSync("node3")
 f1.writeFileSync("node3/source.txt","data from s..")
 data=f1.readFileSync("node3/source.txt","utf-8")
 f1.writeFileSync("node3/source1.txt",data)
 data1=f1.readFileSync("node3/source1.txt","utf-8")
 console.log(data1)

 
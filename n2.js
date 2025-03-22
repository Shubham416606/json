const f1=require("fs");
// f1.mkdirSync("node")
// f1.writeFileSync("node/write.txt","hello write")
//f1.appendFileSync("node/write.txt","word")
// data=f1.readFileSync("node/write.txt");
// console.log(data);
// console.log(data.toString())
// data=f1.readFileSync("node/write.txt","utf-8")
// console.log(data)
//f1.renameSync("node/write.txt","node/rw.txt");
f1.unlinkSync("node/rw.txt")
f1.rmdirSync("node")

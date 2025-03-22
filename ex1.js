//read data from file and arrange that data in asc order
const f1=require("fs");
f1.writeFileSync('data.txt','50 -1 99 100 20 0 56 78 59')
data=f1.readFileSync('data.txt','utf-8')
data1=data.split(" ")
data2=data1.sort((a,b)=>a-b)
console.log(data2) 
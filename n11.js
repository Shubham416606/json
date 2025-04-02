var url=require("url");
var addr="http://localhost:8080/default.html?fname=xyz&lname=april"
var q=url.parse(addr,true);
//console.log(q.query.year)
// write node js to fetch query string from url where first name is xyz and last name is pqr dispaly name on consol prq xyz
console.log(q.query.fname,q.query.lname)
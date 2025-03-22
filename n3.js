const fs = function () {
  console.log("after 3 seconds");
};
setTimeout(fs, 3000);
//anonymous function
setTimeout(function () {
  console.log("direct function");
}, 5000);
//arro function
setTimeout(()=>{console.log("direct function");
}, 6000);
var s=document.createElement("script");
s.src="https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);
var classes = d3.selectAll(".progname").nodes();
classes.forEach(function(a){console.log(a.innerText)})

var express = require('express');

var app = express();
app.use(express.static("./src"));

app.listen(8000, function(){
	console.log("running on http://localhost:8000")
})
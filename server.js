const express = require("express")
const app = express()
//var JSONParser = require("body-parser")

var MiUser = require("./modules/user.js")


app.listen(3000, () =>
{
	console.log('Listening on 3000')
});

app.get('/', (request, response) => 
{
	response.send(MiUser.data.completeName())
	
});
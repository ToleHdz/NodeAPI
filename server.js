const express = require("express")
const app = express()

app.listen(3000, () =>
{
	console.log('Listening on 3000')
});

app.get('/', (request, response) => 
{
	response.send('Onii - chan')
});
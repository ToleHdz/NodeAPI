const express = require("express")
const app = express()
const JSONParser = require('body-parser')
var MiUser = require("./modules/user.js")


app.listen(3000, () =>
{
	console.log('Listening on 3000')
});

app.use(JSONParser.json())

app.get('/', (request, response) => 
{
	response.send(MiUser.data.completeName())
	response.end()
	
});

app.post('/user', (request, response) => 
{
	const respuesta = {completeName : MiUser.data.completeName()}
	response.json(respuesta)
	response.end()
}); 

/*app.post('/user', (request, response) =>
{
	response.json(request.body)				//request.body es el json que nosotros enviamos
	response.end()

	console.log(request.body)
	//console.log(request.body.data.name)
}); */

app.put('/user', (request, response) =>
{
	response.json(request.body)
	response.end()

	console.log(request.body.data.name + ' ' + request.body.data.lastName)			//accedemos a los atributos de nuestro json
});

//servidor de base de datos mongo
//http://donwebayuda.com/tutorial-mongodb-creacion-de-base-de-datos-conexion-remota-y-securizacion/
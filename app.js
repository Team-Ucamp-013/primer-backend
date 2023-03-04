// 1.- importar dependencias
const express = require('express')
// 2.- crear objeto de la aplicacion
const app = express()
const { coursesRouter } = require('./api')

const PORT = 4001
app.use('/courses', coursesRouter)
// req = request | Representa la peticion
// res = response | Representa la respuesta que voy a regresar 
//3.- Defino mis rutas


// 4.- levanta el servidor de mi app
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})
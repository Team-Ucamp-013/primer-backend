// 1.- importar dependencias
const express = require('express')
// 2.- crear objeto de la aplicacion
const app = express()

const PORT = 4000

// req = request | Representa la peticion
// res = response | Representa la respuesta que voy a regresar 
//3.- Defino mis rutas
app.use('/', (req, res) => {
  res.send({
    message: 'Hola Mundo'
  })
})

// 4.- levanta el servidor de mi app
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})
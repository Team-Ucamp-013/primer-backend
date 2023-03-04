// 1.- importar dependencias
const express = require('express')
// 2.- crear objeto de la aplicacion
const app = express()

const PORT = 4001

// req = request | Representa la peticion
// res = response | Representa la respuesta que voy a regresar 
//3.- Defino mis rutas
// app.get('/:name', (req, res) => {
//   console.log('===>', req.params)
//   res.send({
//     message: 'Hola soy un get'
//   })
// })
// app.get('/query', (req, res) => {
//   console.log('==>', req.query)
//   const { nombre } = req.query
//   const { apellido } = req.query
//   res.send({
//     message: `Hola ${nombre} ${apellido}`
//   })
// })
app.get('/:nombre/:apellido', (req, res) => {
  console.log('==>', req.params)
  const { nombre } = req.params
  const { apellido } = req.params
  res.send({
    message: `Hola ${nombre} ${apellido}`
  })
})

// 4.- levanta el servidor de mi app
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})
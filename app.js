// 1.- importar dependencias
const express = require('express')
// 2.- crear objeto de la aplicacion
const app = express()
app.use(express.json());

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
// http://localhost:4001/query?nombre=Fredo&apellido=Noriega
// app.get('/query', (req, res) => {
//   console.log('==>', req.query)
//   const { nombre } = req.query
//   const { apellido } = req.query
//   res.send({
//     message: `Hola ${nombre} ${apellido}`
//   })
// })
//http://localhost:4001/Fredo/Noriega
// app.get('/:nombre/:apellido', (req, res) => {
//   console.log('==>', req.params)
//   const { nombre } = req.params
//   const { apellido } = req.params
//   res.send({
//     message: `Hola ${nombre} ${apellido}`
//   })
// })

app.post('/body', (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  res.send({
    email: email,
    password: password
  })
})

// 4.- levanta el servidor de mi app
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})
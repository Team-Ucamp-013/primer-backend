const express = require('express')
const router = express.Router();

const courses = [
  {
    id: 1,
    name: 'Introducción al análisis matemático',
    clave: '123-213',
    objetive: 'lorem ipsum',
    description: 'Esta es una descripción'
  },
  {
    id: 2,
    name: 'Algoritmos 1',
    clave: 'LVM09876',
    description: 'Foo -bar y así',
    grade: '3'
  }
]

router.get('/', (req, res) => {
  res.send(courses)
})

module.exports = router
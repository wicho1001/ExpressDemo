const express = require('express')
const router = express.Router()
const users = [
  {
    name:'jose',
    password:'tres33',
    edad:13
  },
  {
    name:'Luis',
    password:'Gaspa',
    edad:17
  },
  {
    name:'Angie',
    password:'karas',
    edad:23
  }
]


router.get('/', function (req, res){
  res.render('User', {users})
})

module.exports = router
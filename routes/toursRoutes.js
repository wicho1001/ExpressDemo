const express = require('express')
const router = express.Router()
const tours = [
  {
    name:'Tulum experience',
    price:200
  },
  {
    name:'Explore Cancun',
    price:500
  }
]


router.get('/', function (req, res){
  res.render('Tours', {tours})
})

module.exports = router
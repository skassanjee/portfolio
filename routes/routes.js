const express= require('express')
const app = express()
const MessageSchema = require('../models/messageSchema')
const mongodb = require('mongodb')
const Router = express.Router()

Router.get('/', (req, res, next) => {
    res.render('home')
})


Router.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const newMessage = new MessageSchema({
        name: name,
        email: email,
        phone: phone,
        message: message
      });
    
      newMessage.save().then(result => {
            res.render('redirect')
          })
          .catch(err => console.log(err))
      })

module.exports = Router 
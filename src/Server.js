const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors');
const SMTPTransport = require('nodemailer/lib/smtp-transport');



const app = express;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', () => {
   console.log('sdgs')
})

app.post('/api/forma', (req, res) => {

    let data = req.body
    let smtTransport = nodemailer.createTestAccount({
        service: 'Gmail',
        port: 465,
        auth:{
            user:'skassanjee@gmail.com',
            pass:'$uicideboy$'
        }
    })

    let mailOptions ={
        from: data.email,
        to: 'skassanjee@gmail.com',
        subject: `Message from ${data.name}`,
        html:`
        
        <h3>Info </h3>

            <ul>
            <li> Name: ${data.name}</li>
            <li> Name: ${data.email}</li>
            </ul>

            <h3>
                <p>${data.message} </p>
            </h3>
        `
    };

    smtTransport.sendmail(mailOptions, (error, response) =>{


        if(error){
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtTransport.close()
})

const PORT = process.env.port||3001;

app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}`)
})


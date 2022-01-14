const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser");
app.use(bodyParser());
require('dotenv').config()
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const routes = require('./routes/routes')
app.use(routes)



const mongoose = require('mongoose')

const name = process.env.name;
const pw = process.env.pw;
const db = process.env.db;
mongoose.connect(db)
.then( result => console.log("Connected to DB!"))
.catch(err => console.log(err))

app.listen(3000)

console.log(process.env)
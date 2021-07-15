const express = require('express');
const app = express ();
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false})) 

app.use(bodyParser.json());

const routes = require('./routes')

app.use('/quote', routes.quote) 
app.use('/user', routes.user)

app.listen(3001, () => {
    console.log("I am listening!")
})
//IMPORTS
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const morganBody = require('morgan-body');
const loggerStream = require('./utils/handleLogger')

//INTILIAZITACIONS

const app = express();

//Settings
const port = process.env.PORT || 3001;

//Middleware
PUBLIC_URL_REQUEST= process.env.PUBLIC_URL_REQUEST;

const allowedOrigins = [PUBLIC_URL_REQUEST];

app.use(cors({
    //url del github
	origin: function(origin, callback) {
        // console.log(origin, !origin, allowedOrigins.indexOf(origin) !== -1)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
        },
	method: ['POST'],	
}));

app.use(bodyParser.json({limit: "10mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}));


morganBody(app,{
    noColors:true,
    stream: loggerStream,
    skip: (req, res)=>{
        return res.statusCode < 400 || res.statusCode === 404;
    }
})


//Routes
app.use('/api',require('./routes/email'));

//Listen


app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
});
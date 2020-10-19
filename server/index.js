const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app=express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/auth',  { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connection.on('error', err => {
 console.log(err);
});

// App setup
app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json({ type:'*/*' }));
router(app);



//Server setup

const port = process.env.PORT || 3090;
const server=http.createServer(app);
server.listen(port);
console.log('Server listening on', port);

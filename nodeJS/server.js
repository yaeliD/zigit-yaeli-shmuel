const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const env = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/api');
var cors = require('cors')


env.config();
app.use(cors())
app.use(bodyParser.json());
app.use(routes);

const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}


mongoose.connect(process.env.DB_CONNECT, connectionParams)
.then(() => {
    console.log('connected!!!');
}).catch(err => {console.log(err)});


app.listen(3000, ()=>{console.log('listening on port 3000');});
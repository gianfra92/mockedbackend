const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const services = require('./routes/auth.route');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/login',services.login);
app.get('/profile',services.tokenControl,services.profile);
app.get('/list',services.getList);

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})

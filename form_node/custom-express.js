require('dotenv').config();
const express = require('express');
const consign = require('consign');
var path = require('path');

const app = express();

var public = path.join(__dirname, '../');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

consign({
    //cwd: 'app',
    verbose: process.env.APP_DEBUG === 'true' || false,
    locale: 'pt-br'
})
    .include('Middlewares')
    .then('Controllers')
    .into(app);

module.exports = app;
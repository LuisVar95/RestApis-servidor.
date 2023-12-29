const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// Cors permite que un cliente se conecte a otro servidor
const cors = require('cors')

// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/restapis', {

})

// crear el servidor
const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors 
app.use(cors());

// Rutas de la app
app.use('/', routes());

// carpeta publica
app.use(express.static('uploads'))

// puerto
const puerto = 5000; 
app.listen(puerto, '127.0.0.1', () => {
    console.log(`La aplicacion esta escuchando en http://127.0.0.1:${puerto}`)
});
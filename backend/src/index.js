const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes') ;


const app = express();



mongoose.connect('mongodb+srv://seuEndereçoAqui',{

useNewUrlParser: true,
useUnifiedTopology: true,

});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);





//Tipos de parametros:

//Query Params: request.query (Filtros,ordenaçao , paginaçao,...)
//Route Params: request.params (identificar um recurso na alteraçao ou remoçao)
//Body: request.body (dados para criaçao ou alteraçao de um registro)
//MongoDb (nao relacional )
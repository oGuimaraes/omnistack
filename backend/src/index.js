const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://oguimaraes:otavio22@cluster0-cx1n7.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(express.json()); // Cadastrar para express entenda requisições no formato json
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criaçao ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);

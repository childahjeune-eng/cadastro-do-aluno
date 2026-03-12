const express = require('express');
const mysq1 = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const conexao = mysq1.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});
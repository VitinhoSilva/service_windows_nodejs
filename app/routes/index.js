const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

var empreendimentoUtil = require('../controllers/empreendimento');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.route('/empreendimento/tb/inserir').post(empreendimentoUtil.inserirEmpreendimento);
app.route('/empreendimento/geometria/listar').get(empreendimentoUtil.listarEmpreendimento);
app.route('/empreendimento/tb/listar').get(empreendimentoUtil.listarEmpreendimentoTB);
app.route('/empreendimento/deletar/:sequencial').delete(empreendimentoUtil.deletarEmpreendimento);
app.route('/empreendimento/update/:sequencial').put(empreendimentoUtil.atualizarEmpreendimento);

module.exports = app;
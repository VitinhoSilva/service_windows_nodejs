const { pool } = require('../../knexfile.js');

var empreendimentoUtil = {
    inserirEmpreendimento: inserirEmpreendimento,
    listarEmpreendimento: listarEmpreendimento,
    deletarEmpreendimento: deletarEmpreendimento,
    atualizarEmpreendimento: atualizarEmpreendimento,
    listarEmpreendimentoTB: listarEmpreendimentoTB
}

module.exports = empreendimentoUtil;

function inserirEmpreendimento(request, res) {
  const { sequencial, nome, tip_emp, proc_apr, req, cnpj, n_empr, qtd_sub, are_sub, end_seq, reun_da, acao_mit, sitaacmit, sitempre, proc_lic, area_const, qtd_blo, qtd_cag, observacao } = request.body

  pool.query("INSERT INTO tb_empreendimentos (sequencial, nome, tip_emp, proc_apr, req, cnpj, n_empr, qtd_sub, are_sub, end_seq, reun_da, acao_mit, sitaacmit, sitempre, proc_lic, area_const, qtd_blo, qtd_cag, observacao) VALUES ('" + String(sequencial) + "', '" + String(nome) + "', '" + String(tip_emp) + "', '" + String(proc_apr) + "', '" + String(req) + "', '" +  String(cnpj) + "', '" + String(n_empr) + "', '" + String(qtd_sub) + "', '" + String(are_sub) + "', '" + String(end_seq) + "', '" +  String(reun_da) + "', '" + String(acao_mit) + "', '" + String(sitaacmit) + "', '" + String(sitempre) + "', '" +  String(proc_lic) + "', '" + String(area_const) + "', '" + String(qtd_blo) + "', '" + String(qtd_cag) + "', '" + String(observacao) + "' " + ')', error => {
    if (error) {
      throw error
    }
    res.status(201).json({ sucesso: 'Inserido com sucesso!' })
  })
}

function listarEmpreendimento(req, res) {
  var tabelas = [
  "empreendimentos_de_impacto_rotulo",
  "empreendimentos_linha_3",
  "empreendimentos_de_impacto_texto",
  "empreendimentos_de_impacto_texto_5",
  "empreendimentos_de_impacto_texto_2",
  "empreendimentos_de_impacto_texto_3",
  "empreendimentos_de_impacto_texto_4",
  "empreendimentos_urb_poligono",
  "empreendimentos_poligono_1",
  "empreendimentos_de_impacto_texto_1_1",
  "empreendimentos_poligono_2",
  "empreendimentos_linha_4",
  "empreendimentos_poligono_3",
  "empreendimentos_poligono_4",
  "empreendimentos_linha_2",
  "empreendimentos_linha",
  "empreendimentos_linha_1"
  ];

  var resultado = [];

  for (var i = tabelas.length - 1; i >= 0; i--) {
      pool.query('SELECT * FROM ' + tabelas[i], (error, results) => {
        if (error) {
          throw error
        }
        resultado.push(results.rows);
      })
  }
  setTimeout(function(){
      res.status(200).json(resultado);
  },5000);
}

function listarEmpreendimentoTB(req, res) {
  pool.query('SELECT * FROM tb_empreendimentos', (error, results) => {
    if (error) {
      throw error
    }
    let tratamento = {
        empreendimentos: results.rows
    }
    res.status(200).json(tratamento)
  })
}

function atualizarEmpreendimento(request, res) {
  const id = request.params.sequencial
  const { sequencial, numero, nome, tip_emp, proc_apr, req, cnpj, n_empr, qtd_sub, are_sub, end_seq, reun_da, acao_mit, sitaacmit, sitempre, proc_lic, area_const, qtd_blo, qtd_cag, observacao } = request.body

  pool.query(
    'UPDATE tb_empreendimentos SET sequencial = $1, numero =$2, nome = $3, tip_emp = $4, proc_apr = $5, req = $6, cnpj = $7, n_empr = $8, qtd_sub = $9, are_sub = $10, end_seq = $11, reun_da = $12, acao_mit = $13, sitaacmit = $14, sitempre = $15, proc_lic = $16, area_const = $17, qtd_blo = $18, qtd_cag = $19, observacao = $20 WHERE sequencial = $21',
    [sequencial, numero, nome, tip_emp, proc_apr, req, cnpj, n_empr, qtd_sub, are_sub, end_seq, reun_da, acao_mit, sitaacmit, sitempre, proc_lic, area_const, qtd_blo, qtd_cag, observacao, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with id: ${sequencial}`)
    }
  )
}

function deletarEmpreendimento(req, res) {
  const sequencial = req.params.sequencial

  pool.query('DELETE FROM tb_empreendimentos WHERE sequencial = $1', [sequencial], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted with sequencial: ${sequencial}`)
  })
}


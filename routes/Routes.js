const express = require('express')
const Controller = require('../controllers/Controller')

const router = express.Router()

router.post('/usuario/', Controller.cadastrarUsuario)
router.post('/produto/', Controller.cadastrarProduto)
/*
router.post('/tema/', Controller.cadastrarTema)
router.post('/categoria/', Controller.cadastrarCategoria)
router.post('/endereco/', Controller.cadastrarEndereco)
*/

router.get('/usuario/', Controller.buscarUsuario)
router.get('/carrinho/:id', Controller.buscarCarrinho)
router.get('/produtos/tema/:id', Controller.produtosPorTema)
router.get('/produtos/categoria/:id', Controller.produtosPorCategoria)
router.get('/produtos/descricao/:descricao', Controller.produtosPorDescricao)


/*router.get('/proprietarios/', Controller.listarProprietarios)
router.get('/produtos/', Controller.listarProdutos)
router.get('/proprietarios/nome/:nome', Controller.proprietarioPorNome)
router.get('/produtos/maiorquantidade', Controller.produtoMaiorQuantidade)
router.get('/produtos/maiorvalor', Controller.produtoMaiorValor)
router.get('/produtos/maiorvalortotal', Controller.produtoMaiorValorTotal)
router.get('/proprietarios/maiorquantidade', Controller.proprietarioMaiorQuantidade)

router.put('/proprietarios/:id', Controller.atualizarProprietario)
router.put('/produtos/:id', Controller.atualizarProduto)

router.delete('/proprietarios/id/:id', Controller.deletarProprietario)
router.delete('/produtos/id/:id', Controller.deletarProduto)*/

module.exports = router;
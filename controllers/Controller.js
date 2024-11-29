const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {
    async cadastrarProduto(req, res) {
        try {
            const { descricao, saldo, custo, venda, imagem, temaId, categoriaId } = req.body;
            const novoProduto = await prisma.produto.create({
                data: { descricao, saldo, custo, venda, imagem, temaId, categoriaId }
            });
            res.status(201).json(novoProduto);
        } catch(error) {
            res.status(500).json({ error: 'Erro ao cadastrar produto' });
        }
    },
    async cadastrarUsuario(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const novoUsuario = await prisma.usuario.create({
                data: { nome, email, senha }
            });
            res.status(201).json(novoUsuario);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    },
    /* 
    ------------CADASTROS-----------
    CADASTRAR TEMA
    async cadastrarTema(req, res) {
        try {
            const { nome } = req.body;
            const novoTema = await prisma.tema.create({
                data: { nome }
            });
            res.status(201).json(novoTema);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    },

    CADASTRAR CATEGORIA
    async cadastrarCategoria(req, res) {
        try {
            const { nome } = req.body;
            const novaCategoria = await prisma.categoria.create({
                data: { nome }
            });
            res.status(201).json(novaCategoria);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    },
    
    CADASTRAR ENDEREÇO
    async cadastrarEndereco(req, res) {
        try {
            const { cep, rua, bairro, cidade, numero, uf, usuarioId } = req.body;
            const novoEndereco = await prisma.endereco.create({
                data: { cep, rua, bairro, cidade, numero, uf, usuarioId }
            });
            res.status(201).json(novoEndereco);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    },
    
    ------------LISTAGENS-----------

    */



    async buscarUsuario (req, res) {
        try{
            const { email, senha } = req.body;
            const usuarios = await prisma.usuario.findMany({
                where:{
                    email:email
                }
            });
            if(usuarios.length == 0){
                res.status(200).json({ error: 'Usuário não encontrado' });
            }
            else if(usuarios[0].senha == senha){
                res.status(200).json(usuarios[0]);
            }
            else{
                res.status(200).json({ error: 'Senha incorreta' });
            }
        }catch (error) {
            res.status(500).json({ error: 'Erro ao acessar usuários' });
        }
    },
    async buscarCarrinho (req, res) {
        try {
            const {id} = req.params;
            const produtos = await prisma.carrinho.findMany({
                where:{
                    usuarioId:Number(id)
                }
            })
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar carrinho' });
        }
    },
    async produtosPorTema(req, res) {
        try {
            const { id } = req.params;
            const produtos = await prisma.produto.findMany({
                where: {
                    temaId: Number(id)
                }
            })
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar carrinho' });
        }    
    },
    async produtosPorCategoria(req, res) {
        try {
            const { id } = req.params;
            const produtos = await prisma.produto.findMany({
                where: {
                    categoriaId: Number(id)
                }
            })
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar carrinho' });
        }
    },
    async produtosPorDescricao(req, res) {
        try {
            const descricao = req.params.descricao;
            const produtos = await prisma.produto.findMany({
                where: {
                    descricao: {
                        contains: descricao
                    }
                }
            });
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar proprietário por nome" })
        }
    }
};

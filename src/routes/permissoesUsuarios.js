const express = require('express');
const router = express.Router();
const permissaoUsuario = require('../models/permissaoUsuario');

router.post('/', async (req, res) => {
  try {
    const id = await permissaoUsuario.criarPermissaoUsuario(req.body);
    res.status(201).json({ message: 'Permissão de usuário criada com sucesso', id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar permissão de usuário' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const rows = await permissaoUsuario.atualizarPermissaoUsuario({
      id: req.params.id,
      ...req.body
    });
    if (rows > 0) {
      res.status(200).json({ message: 'Permissão de usuário atualizada com sucesso' });
    } else {
      res.status(404).json({ message: 'Permissão de usuário não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar permissão de usuário' });
  }
});

router.get('/', async (req, res) => {
  try {
    const permissoes = await permissaoUsuario.listarPermissoesUsuarios();
    res.status(200).json(permissoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar permissões de usuários' });
  }
});

router.get('/usuario/:usuarioId', async (req, res) => {
  try {
    const permissoes = await permissaoUsuario.listarPermissoesPorUsuario(req.params.usuarioId);
    res.status(200).json(permissoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar permissões do usuário' });
  }
})

module.exports = router;
const express = require('express');
const funcionalidadesSistema = require('../models/funcionalidade');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const funcionalidades = await funcionalidadesSistema.listar();
    res.status(200).json(funcionalidades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar funcionalidades' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const funcionalidadeEspecifica = await funcionalidadesSistema.funcionalidadeEspecifica(req.params.id);
    if (funcionalidadeEspecifica.length > 0) {
      res.status(200).json(funcionalidadeEspecifica[0]);
    } else {
      res.status(404).json({ message: 'Funcionalidade não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar funcionalidade' });
  }
})

module.exports = router;
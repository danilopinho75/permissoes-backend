const express = require('express');
const router = express.Router();
const permissaoGrupo = require('../models/permissaoGrupo');

router.post("/", async (req, res) => {
  try {
    const id = await permissaoGrupo.criarPermissao(req.body);
    res.status(201).json({ message: "Permissão de grupo criada com sucesso", id });    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar permissão de grupo" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const rows = await permissaoGrupo.atualizaPermissao({
      id: req.params.id,
      ...req.body
    });
    if (rows > 0) {
      res.status(200).json({ message: 'Permissão de grupo atualizada com sucesso' });
    } else {
      res.status(404).json({ message: 'Permissão de grupo não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar permissão de grupo" });
  }
});

router.get('/', async (req, res) => {
  try {
    const permissoes = await permissaoGrupo.listarPermissoes();
    res.status(200).json(permissoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar permissões de grupos' });
  }
})

module.exports = router;
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const permissoesUsuarios = require('./src/routes/permissoesUsuarios');
const funcionalidades = require('./src/routes/funcionalidades');
const permissoesGrupo = require('./src/routes/permissoesGrupo');

// Rotas
app.use('/permissoes-usuarios', permissoesUsuarios);
app.use('/permissoes-grupos', permissoesGrupo);
app.use('/funcionalidades', funcionalidades);


app.get('/', (req, res) => {
  res.send('API de Permissões Funcionando!');
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})


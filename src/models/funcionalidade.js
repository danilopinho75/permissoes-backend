const db = require('../db');

const funcionalidades = {
  async listar() {
    const funcionalidades = await db.query("SELECT * FROM funcionalidades");
    return funcionalidades[0];
  },

  async funcionalidadeEspecifica(id) {
    const [funcionalidade] = await db.query(
      "SELECT * FROM funcionalidades WHERE id = ?",
      [id]
    );
    return funcionalidade;
  }
}

module.exports = funcionalidades;
const db = require('../db');

const permissaoGrupo = {
  async criarPermissao({ grupoId, funcionalidadeId }) {
    const [result] = await db.query(
      "INSERT INTO permissoes_grupos (grupo_id, funcionalidade_id) VALUES(?, ?)",
      [grupoId, funcionalidadeId]
    );
    return result.insertId;
  },
  async atualizaPermissao({ id, grupoId, funcionalidadeId }) {
    const [result] = await db.query(
      "UPDATE permissoes_grupos SET grupo_id = ?, funcionalidade_id = ? WHERE id = ?",
      [grupoId, funcionalidadeId, id]
    );
    return result.affectedRows;
  },
  async listarPermissoes() {
    const [rows] = await db.query("SELECT * FROM permissoes_grupos");
    return rows;
  }
}

module.exports = permissaoGrupo;
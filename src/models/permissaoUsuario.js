const db = require('../db');

const permissaoUsuario = {
  async criarPermissaoUsuario({ usuarioId, funcionalidadeId }) {
    const [result] = await db.query(
      "INSERT INTO permissoes_usuarios (usuario_id, funcionalidade_id) VALUES(?, ?)",
      [usuarioId, funcionalidadeId]
    );
    return result.insertId;
  },

  async atualizarPermissaoUsuario({ id, usuarioId, funcionalidadeId }) {
    const [result] = await db.query(
      "UPDATE permissoes_usuarios SET usuario_id = ?, funcionalidade_id = ? WHERE id = ?",
      [usuarioId, funcionalidadeId, id]
    );
    return result.affectedRows;
  },

  async listarPermissoesUsuarios() {
    const [rows] = await db.query("SELECT * FROM permissoes_usuarios");
    return rows;
  },

  async listarPermissoesPorUsuario(usuarioId) {
    const [rows] = await db.query(
      "SELECT * FROM permissoes_usuarios WHERE usuario_id = ?",
      [usuarioId]
    );
    return rows;
  }

}

module.exports = permissaoUsuario;
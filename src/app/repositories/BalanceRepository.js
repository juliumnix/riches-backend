const db = require("../../database");

class BalanceRespository {
  async findAll(id) {
    const rows = await db.query(
      `SELECT * FROM movimentacao WHERE id_usuario = '${id}' ORDER BY id_movimentacao DESC`
    );
    return rows;
  }

  async createEntrada(id_usuario, valor, entrada) {
    const [row] = await db.query(
      `INSERT INTO movimentacao(id_usuario, valor, entrada)
      VALUES($1, $2, $3)
      RETURNING *
      `,
      [id_usuario, valor, entrada]
    );
    return row;
  }

  async createSaida(id_usuario, valor, saida) {
    const [row] = await db.query(
      `INSERT INTO movimentacao(id_usuario, valor, saida) 
      VALUES($1, $2, $3)
      RETURNING *
      `,
      [id_usuario, valor, saida]
    );
    return row;
  }
}

module.exports = new BalanceRespository();

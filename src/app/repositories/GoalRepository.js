const db = require("../../database");

class GoalRepository {
  async findAll(id) {
    const rows = await db.query(
      `SELECT * FROM metas WHERE id_usuario = '${id}' ORDER BY id_meta DESC`
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`SELECT * FROM metas WHERE id_meta = $1`, [
      id,
    ]);
    return row;
  }

  async createGoal(id_usuario, nome, url_image, numero_parcela, valor) {
    const [row] = await db.query(
      `INSERT INTO metas(id_usuario, nome, url_image, numero_parcela, valor)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [id_usuario, nome, url_image, numero_parcela, valor]
    );
    return row;
  }

  async updateGoal(id, valorRealizado) {
    const [row] = await db.query(
      `UPDATE metas 
      SET realizado = $1
      WHERE id_meta = $2
      RETURNING *
      `,
      [valorRealizado, id]
    );

    return row;
  }
}

module.exports = new GoalRepository();

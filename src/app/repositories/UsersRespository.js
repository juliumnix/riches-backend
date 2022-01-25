const db = require("../../database");

class UsersRespository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(
      `SELECT * FROM usuarios ORDER BY nome ${direction}`
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `SELECT * FROM usuarios WHERE id_usuario = $1`,
      [id]
    );
    return row;
  }

  async delete(id) {
    const deleteOp = db.query(`DELETE FROM usuarios WHERE id_usuario = $1`, [
      id,
    ]);

    return deleteOp;
  }

  async findByEmail(email) {
    const [row] = await db.query(`SELECT * FROM usuarios WHERE email = $1`, [
      email,
    ]);
    return row;
  }

  async create({ nome, email, senha }) {
    const [row] = await db.query(
      `INSERT INTO usuarios(nome, email, senha) 
      VALUES($1, $2, $3)
      RETURNING *
      `,
      [nome, email, senha]
    );
    return row;
  }

  async update(id, { nome }) {
    const [row] = await db.query(
      `UPDATE usuarios 
      SET nome = $1
      WHERE id_usuario = $2
      RETURNING *
      `,
      [nome, id]
    );

    return row;
  }

  async updateSaldo(id, { saldo }) {
    const [row] = await db.query(
      `UPDATE usuarios 
      SET saldo = $1
      WHERE id_usuario = $2
      RETURNING *
      `,
      [saldo, id]
    );

    return row;
  }
}

module.exports = new UsersRespository();

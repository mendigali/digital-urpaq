module.exports = class ShopQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async create(product) {
    const { name, description, price, is_available, fileName } = product;
    const sql = 'INSERT INTO product (name, description, price, is_available, image, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const date = new Date().toISOString();
    const data = [name, description, price, is_available, fileName, date, date];
    const newProduct = await this.connection.query(sql, data);
    return newProduct.rows[0];
  }

  async getAll() {
    const sql = 'SELECT * FROM product ORDER BY updated_at DESC';
    const questions = await this.connection.query(sql);
    return questions.rows;
  }

  async getById(id) {
    const sql = 'SELECT * FROM product WHERE id=$1';
    const question = await this.connection.query(sql, [id]);
    return question.rows[0];
  }
}
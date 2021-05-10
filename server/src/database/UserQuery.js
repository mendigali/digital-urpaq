module.exports = class UserQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async getByUsername(username) {
    const sql = 'SELECT * FROM user_account WHERE username = $1';
    let user = await this.connection.query(sql, [username]);
    return user.rows[0];
  }

  async getByEmail(email) {
    const sql = 'SELECT * FROM user_account WHERE email = $1';
    let user = await this.connection.query(sql, [email]);
    return user.rows[0];
  }

  async register(user) {
    const { username, email, password, user_type_id } = user;
    const sql = 'INSERT INTO user_account (username, email, password, created_at, updated_at, user_type_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const date = new Date().toISOString();
    const data = [username, email, password, date, date, user_type_id];
    const newUser = await this.connection.query(sql, data);
    return newUser.rows[0];
  }
}
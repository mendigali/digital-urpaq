module.exports = class AnswerQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async getAll(id) {
    const sql = 'SELECT * FROM reply WHERE question_id = $1';
    const answers = await this.connection.query(sql, [id]);
    return answers.rows;
  }

  async create(answer) {
    const { question_id, user_id, text } = answer;
    const sql = 'INSERT INTO reply (question_id, user_id, text, created_at, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const date = new Date().toISOString();
    const data = [question_id, user_id, text, date, date];
    const newAnswer = await this.connection.query(sql, data);
    return newAnswer.rows[0];
  }
};
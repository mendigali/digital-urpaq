module.exports = class QuestionQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async create(question) {
    const { title, text, user_id, difficulty } = question;
    const sql = 'INSERT INTO question (title, text, user_id, difficulty, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const date = new Date().toISOString();
    const data = [title, text, user_id, difficulty, date, date];
    const newQuestion = await this.connection.query(sql, data);
    return newQuestion.rows[0];
  }
 
  async update(question) {
    const { title, text, user_id, difficulty } = question;
    const sql = 'Update question SET title = $1, text=$2,user_id=$3,difficulty=$4,updated_at=$5 WHERE id = $6';
    const date = new Date().toISOString();
    const data = [title, text, user_id, difficulty, date];
    const updateQuestion = await this.connection.query(sql, data);
    return updateQuestion.rows[0];
  }
  async getAll() {
    const sql = 'SELECT * FROM question ORDER BY created_at DESC';
    const questions = await this.connection.query(sql);
    return questions.rows;
  }

  async getById(id) {
    const sql = 'SELECT * FROM question WHERE id=$1';
    const question = await this.connection.query(sql, [id]);
    return question.rows[0];
  }
  async deleteById(id) {
    const sql = 'DELETE FROM question WHERE id=$1';
    const question = await this.connection.query(sql, [id]);
    return question.rows[0];
  }
}
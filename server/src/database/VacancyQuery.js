module.exports = class VacancyQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async getById(id) {
    const sql = 'SELECT * FROM vacancy WHERE id=$1';
    const vacancy = await this.connection.query(sql, [id]);
    return vacancy.rows[0];
  }

  async getAll() {
    const sql = 'SELECT * FROM vacancy';
    const vacancies = await this.connection.query(sql);
    return vacancies.rows;
  }

  async create(vacancy) {
    const {
      is_internship,
      is_fulltime,
      is_visible = true,
      user_id,
      experience_required,
      title,
      description,
      location,
      salary_min,
      salary_max
    } = vacancy;
    const sql = `insert into vacancy
        (is_internship, is_fulltime, is_visible, experience_required, title,
        description, location, salary_min, salary_max, user_id, created_at, updated_at)
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`;
    const date = new Date().toISOString();
    const data = [is_internship, is_fulltime, is_visible, experience_required, title,
      description, location, salary_min, salary_max, user_id, date, date];
    const newVacancy = await this.connection.query(sql, data);
    return newVacancy.rows[0];
  }
};
export default class VacancyAPI {
  constructor(server) {
    this.server = server;
  }

  async getAll() {
    try {
      const axiosResponse = await this.server.get('vacancies/');
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getOne(id) {
    try {
      const axiosResponse = await this.server.get('vacancies/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async update(id, vacancy) {
    try {
      const axiosResponse = await this.server.put('vacancies/' + id, vacancy);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async delete(id) {
    try {
      const axiosResponse = await this.server.delete('vacancies/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async create(user_id, vacancy) {
    try {
      const {
        is_internship,
        is_fulltime,
        is_remote,
        experience,
        title,
        description,
        location,
        salary_min,
        salary_max
      } = vacancy;
      const axiosResponse = await this.server.post('vacancies/', {
        user_id,
        is_internship,
        is_fulltime,
        is_remote,
        experience,
        title,
        description,
        location,
        salary_min: parseInt(salary_min),
        salary_max: parseInt(salary_max)
      });
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
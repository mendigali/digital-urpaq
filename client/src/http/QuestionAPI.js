export default class QuestionAPI {
  constructor(server) {
    this.server = server;
  }

  async getAll() {
    try {
      const axiosResponse = await this.server.get('questions/');
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getOne(id) {
    try {
      const axiosResponse = await this.server.get('questions/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async create(user_id, question) {
    try {
      const { title, text, difficulty } = question;
      const axiosResponse = await this.server.post('questions/', { title, text, user_id, difficulty });
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async update(id, question) {
    try {
      const axiosResponse = await this.server.put('questions/' + id, question);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async deleteOneQuestion(id) {
    try {
      const axiosResponse = await this.server.delete('questions/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
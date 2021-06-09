export default class AnswerAPI {
  constructor(server) {
    this.server = server;
  }

  async getByQuestionId(id) {
    try {
      const axiosResponse = await this.server.get('answers/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async create({ question_id, user_id, text }) {
    try {
      const axiosResponse = await this.server.post('answers/', { user_id, question_id, text});
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
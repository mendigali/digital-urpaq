export default class NewsAPI {
  constructor(server) {
    this.server = server;
  }

  async getAll() {
    try {
      const axiosResponse = await this.server.get('news/');
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getOne(id) {
    try {
      const axiosResponse = await this.server.get('news/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async create(post) {
    try {
      const { author_id, title, content } = post;
      const axiosResponse = await this.server.post('news/', { author_id, title, content });
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async deleteOneNews(id) {
    try {
      const axiosResponse = await this.server.delete('news/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

}
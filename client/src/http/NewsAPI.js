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

  async create(author_id, post) {
    try {
      const { title, content } = post;
      const axiosResponse = await this.server.post('news/', { author_id, title, content });
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async update(id, post) {
    try {
      const axiosResponse = await this.server.put('news/' + id, post);
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
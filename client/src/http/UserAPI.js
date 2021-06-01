export default class UserAPI {
  constructor(server) {
    this.server = server;
  }

  async register(user) {
    try {
      const { username, email, password } = user;
      const axiosResponse = await this.server.post('users/register', { username, email, password });
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async login(user) {
    try {
      const { username, password } = user;
      const axiosResponse = await this.server.post('users/login', { username, password });
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

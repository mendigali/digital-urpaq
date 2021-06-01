export default class ShopAPI {
  constructor(server) {
    this.server = server;
  }

  async getAllProducts() {
    try {
      const axiosResponse = await this.server.get('shop/');
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getOneProduct(id) {
    try {
      const axiosResponse = await this.server.get('shop/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
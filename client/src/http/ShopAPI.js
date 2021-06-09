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

  async create(user_id, product) {
    try {
      const { title, text,price } = product;
      const axiosResponse = await this.server.post('shop/', { title, text, user_id,price });
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async deleteOneProduct(id) {
    try {
      const axiosResponse = await this.server.delete('shop/' + id);
      return axiosResponse.data;
    } catch (error) {
      return error.response.data;
    }
  }

}
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
      const axiosResponse = await this.server.post('shop/', product, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
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
import { server } from './index';

export const getAllProducts = async () => {
  try {
    const axiosResponse = await server.get('shop/');
    return axiosResponse.data;
  } catch (error) {
    return error.response.data;
  }
}

export const getOneProduct = async (id) => {
  try {
    const axiosResponse = await server.get('shop/' + id);
    return axiosResponse.data;
  } catch (error) {
    return error.response.data;
  }
}
import { server } from './index';

export const register = async (user) => {
  try {
    const { username, email, password } = user;
    const axiosResponse = await server.post('users/register', { username, email, password });
    return axiosResponse.data;
  } catch (error) {
    return error.response.data;
  }
}

export const login = async (user) => {
  try {
    const { username, password } = user;
    const axiosResponse = await server.post('users/login', { username, password });
    return axiosResponse.data;
  } catch (error) {
    return error.response.data;
  }
}
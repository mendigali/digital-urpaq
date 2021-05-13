import { server } from './index';

export const getAllQuestions = async () => {
  try {
    const axiosResponse = await server.get('questions/');
    return axiosResponse.data;
  } catch (error) {
    return error.response.data;
  }
}

export const getOneQuestion = async (id) => {
  try {
    const axiosResponse = await server.get('questions/' + id);
    return axiosResponse.data;
  } catch (error) {
    return error.response.data;
  }
}
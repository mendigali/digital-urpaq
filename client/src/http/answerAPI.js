import { server } from './index';

export const getAnswersByQuestionId = async (id) => {
  try {
    const axiosResponse = await server.get('answers/' + id);
    return axiosResponse.data;
  } catch (error) {
    return error.response.data;
  }
}
import { server } from './index';

export const register = async (user) => {
  const { username, email, password } = user;
  return await server.post('users/register', { username, email, password });
}
const { User } = require('../database/index');

class UserController {
  async login(req, res) {
    try {
      const { password, username } = req.body;
      const user = await User.getByUsername(username);
      if (!user) {
        return res.status(400).json({ message: 'User does not exist!' });
      }
      if (password !== user.password) {
        return res.status(400).json({ message: 'Invalid password!' });
      }
      return res.json({
        message: 'User successfully logged in!',
        data: user
      });
    } catch (error) {
      return res.status(500).json({ message: 'Unknown error occurred while user login!' });
    }
  }

  async register(req, res) {
    try {
      const { username, password, email, user_type_id = 2 } = req.body;
      const candidateUsername = await User.getByUsername(username);
      const candidateEmail = await User.getByEmail(email);
      if (candidateUsername || candidateEmail) {
        return res.status(400).json({ message: 'User already exists!' });
      }
      const newUser = await User.register({ username, email, password, user_type_id });
      return res.json({
        message: 'User created successfully',
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({ message: 'Unknown error occurred while user login!' });
    }
  }
}

module.exports = new UserController();
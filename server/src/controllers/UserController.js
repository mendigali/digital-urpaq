const { User } = require('../database/index');

class UserController {
  async login(req, res) {
    try {
      const { password, username } = req.body;
      const user = await User.getByUsername(username);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'User does not exist!',
          errors: ['User does not exist in the database!']
        });
      }
      if (password !== user.password) {
        return res.status(400).json({
          success: false,
          message: 'Invalid password!',
          errors: ['Invalid password!']
        });
      }
      return res.json({
        success: true,
        message: 'User successfully logged in!',
        data: user
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Unknown error occurred while user login!',
        errors: [error.message]
      });
    }
  }

  async register(req, res) {
    try {
      const { username, password, email, user_type_id = 2 } = req.body;
      const candidateUsername = await User.getByUsername(username);
      const candidateEmail = await User.getByEmail(email);
      if (candidateUsername || candidateEmail) {
        return res.status(400).json({
          success: false,
          message: 'User already exists!',
          errors: ['User already exists!']
        });
      }
      const newUser = await User.register({ username, email, password, user_type_id });
      return res.json({
        success: true,
        message: 'User created successfully',
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Unknown error occurred while user login!',
        errors: [error.message]
      });
    }
  }
}

module.exports = new UserController();
const { News } = require('../database/index');

class NewsController {
  async getAll(req, res) {
    try {
      const posts = await News.getAll();
      res.json({
        success: true,
        message: 'Successfully retrieved posts list!',
        amount: posts.length,
        data: posts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting posts list!',
        errors: [error.message]
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await News.getById(id);
      res.json({
        success: true,
        message: 'Successfully retrieved one post!',
        data: post
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting post!',
        errors: [error.message]
      });
    }
  }

  async create(req, res) {
    try {
      const { author_id, title, content, is_visible } = req.body;
      const newPost = await News.create({ author_id, title, content, is_visible });
      res.json({
        success: true,
        message: 'Successfully added post to database!',
        data: newPost
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while inserting post to database!',
        errors: [error.message]
      });
    }
  }
}

module.exports = new NewsController();
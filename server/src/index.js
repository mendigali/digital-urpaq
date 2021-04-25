import express from 'express';
import Joi from 'joi';
import date from 'date-and-time';
import db from './db/index.js';

const app = express();

app.use(express.json());

const userSchemaRegister = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string()
    .alphanum()
    .min(4)
    .max(64)
    .required(),
  password: Joi.string()
    .alphanum()
    .min(8)
    .max(64)
    .required(),
  user_type_id: Joi.number()
});

const userSchemaLogin = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(4)
    .max(64)
    .required(),
  password: Joi.string()
    .alphanum()
    .min(8)
    .max(64)
    .required()
});

async function getUserByUsername(username) {
  const sql = 'select * from "user" where username = $1';
  let user = await db.query(sql, [username]);
  return user.rows[0];
}

async function getUserByEmail(email) {
  const sql = 'select * from "user" where email = $1';
  let user = await db.query(sql, [email]);
  return user.rows[0];
}

app.post('/register', async (req, res) => {
  try {
    const data = req.body;
    // const { err } = userSchemaRegister.validate(data);
    await Joi.validate(data, userSchemaRegister, async (err, value) => {
      if (err) {
        res.status(422).json({
          status: 'error',
          message: 'Invalid request data',
          data: data
        });
      } else {
        let user = await getUserByUsername(data.username);
        if (user) {
          res.status(418).json({
            status: 'error',
            message: 'User already exists!',
            data: data
          });
          return;
        }
        user = await getUserByEmail(data.email);
        if (user) {
          res.status(418).json({
            status: 'error',
            message: 'Email is already used!',
            data: data
          });
          return;
        }
        let sql = "insert into \"user\" (username, email, password, user_type_id) values ($1, $2, $3, $4) returning *";
        let userArr = [data.username, data.email, data.password, data.user_type_id]
        const newUser = await db.query(sql, userArr);
        res.json({
          status: 'success',
          message: 'User created successfully',
          data: newUser.rows[0]
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'Something went wrong!',
      message: error.message
    });
  }
});

app.post('/login', async (req, res) => {
  try {
    const data = req.body;
    const { err } = userSchemaLogin.validate(data);
    if (err) {
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
        data: data
      });
    } else {
      const user = await getUserByUsername(data.username);
      if (!user) {
        res.status(401).json({
          status: 'error',
          message: 'User does not exist!',
          data: data
        });
      } else {
        if (data.password === user.password) {
          res.json({
            status: 'success',
            message: 'User successfully logged in!',
            data: {
              username: user.username,
              email: user.email,
              password: user.password,
              registration_date: date.format(user.registration_date, 'YYYY/MM/DD'),
              user_type_id: user.user_type_id
            }
          });
        } else {
          res.status(401).json({
            status: 'error',
            message: 'Wrong password!',
            data: data
          });
        }
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 'Something went wrong!',
      message: error.message
    });
  }
});

app.listen(3000);
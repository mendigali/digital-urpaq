require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT);
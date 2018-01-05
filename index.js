const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
models = require('./models');

models.sequelize.sync({logging: console.log}).then(() => {app.listen(8000);});
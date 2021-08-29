const express = require('express');
const Random  = require('../controllers/Randoms.js');
const validate = require ('../middlewares/auth.js');
const randomsRouter = express.Router();
const random = new Random();

randomsRouter.get('/', validate, random.getRandom);
//randomsRouter.get('/number', random.getNumber);



module.exports = randomsRouter;
const db = require('../models/models');
const bcrypt = require('bcrypt');

const userController = {};
const genSalt = 8;

userController.createUser = async (req, res, next) => {
  console.log('req body: ', req.body);
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, genSalt);
  // console.log(hashedPassword);
  console.log('type of username: ', typeof username);
  const queryString = 'INSERT INTO users (name, password) VALUES ($1, $2)';
  const values = [username, hashedPassword];
  try {
    console.log('In HERE');
    await db.query(queryString, values);
    res.locals.user = true;
    return next();
  } catch (error) {
    console.log(error);
    console.log('In ERROR');
    res.locals.user = false;
  }
  // res.locals.user = response;
  return next();
  // return next();
};

userController.verifyUser = async function (req, res, next) {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const query = 'SELECT password FROM users WHERE name = $1';
  const response = await db.query(query, [username]);
  // console.log(response.rows);
  const comparePassword = response.rows[0].password;
  console.log('hashed Pass: ', hashedPassword);
  console.log('comparePassword: ', comparePassword);
  const compare = await bcrypt.compare(password, hashedPassword);
  console.log('compare: ', compare);
  return next();
};

// const crypt = async () => {
//   const password = 'RED';
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);
//   const comparePassword = await bcrypt.compare(password, hashedPassword);
//   console.log(comparePassword);
// };

// crypt();

module.exports = userController;

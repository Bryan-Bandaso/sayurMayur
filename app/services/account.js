const db = require('../../config/database');
const path = require('path');

const getViewLogin = (req, res) => {
  res.render('login');
};

const getViewRegist = (req, res) => {
  res.render('regis');
};

const createDataUser = async (req, res) => {
  try {
    const payLoad = {
      ...req.body,
      created_at: new Date(),
      updated_at: null,
    };

    await db('account').insert(payLoad).returning('*');

    return res.render('login');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product data', error });
  }
};

const loginUser = (req, res) => {
  try {
    const { username, password } = req.body;

    db('account')
      .select('username', 'password')
      .where({ username })
      .first()
      .then((user) => {
        if (user) {
          if (password === user.password) res.render('home', { user });
        } else res.status(401).json({ message: 'Login gagal' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getViewLogin, getViewRegist, createDataUser, loginUser };

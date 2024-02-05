const db = require('../../../config/database');
const path = require('path');

const getViewLogin = (req, res) => {
  res.render('admin/adminLogin');
};

// const getViewIndex = (req, res) => {
//   res.render('admin/index');
// };

const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  db('admin')
    .select('username', 'password')
    .where({ username, password })
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json({ message: 'Login berhasil', data: result });
      } else {
        res.status(401).json({ message: 'Login gagal' });
      }
    });
};

module.exports = { getViewLogin, loginAdmin };

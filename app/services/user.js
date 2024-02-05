const db = require('../../config/database');
const path = require('path');
const uuid = require('uuid');

const viewProfile = async (req, res) => {
  res.render('profile');
};

const createDataUser = (req, res) => {
  const { namaUser, numberPhone, alamat } = req.body;

  db('user')
    .where({ id: accountID })
    .first()
    .then((account) => {
      if (!account) {
        return res
          .status(500)
          .json({ message: 'Invalid accountID. Account not found.' });
      }
      const payLoad = {
        id: uuid.v4(),
        accountID,
        namaUser,
        numberPhone,
        alamat,
      };

      return db('user').insert(payLoad).returning('*');
    })
    .then((result) => {
      return res
        .status(200)
        .json({ message: 'Data berhasil dibuat', data: result });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    });
};

module.exports = { viewProfile, createDataUser };

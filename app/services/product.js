const db = require('../../config/database');

const getViewProduct = (req, res) => {
  res.render('home');
};

// shoplist
const getAllData = async (req, res) => {
  try {
    const product = await db('product').select('*');
    res.render('shopList', { product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getProductbyKategori = async (req, res) => {
  const { category } = req.body;

  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }

  const products = await db('product')
    .select('*')
    .where('category', '=', category);

  if (products.length === 0) {
    return res
      .status(404)
      .json({ error: 'Products not found for the given category' });
  }

  return res.render('shopList', { products });
};

module.exports = {
  getViewProduct,
  getAllData,
  getProductbyKategori,
};

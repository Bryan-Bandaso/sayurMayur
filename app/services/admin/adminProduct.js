const db = require('../../../config/database');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const getViewDashboard = async (req, res) => {
  try {
    const transaction = await db('transaction').select('*');
    res.render('admin/index', { transaction });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product data', error });
  }
};

const getViewProduct = async (req, res) => {
  try {
    const products = await db('product').select('*');
    res.render('admin/product', { products });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product data', error });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name_product, category, price, amount } = req.body;

    // Check if a file is included in the request
    const images = req.file ? `/uploads/${req.file.filename}` : null;

    const [insertedProduct] = await db('product')
      .insert({
        name_product,
        category,
        price,
        amount,
        created_at: new Date(),
        updated_at: null,
        images: images,
      })
      .returning('*');

    console.log(insertedProduct);

    if (insertedProduct) {
      res.redirect('/admin/product');
    } else {
      return res.status(500).json({ message: 'Error creating the product.' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching product data', error });
  }
};

const getUpdateProductID = async (req, res) => {
  const id = req.params.id;

  if (isNaN(parseInt(id))) {
    return res
      .status(400)
      .json({ message: 'Invalid id parameter. Must be an integer.' });
  }

  try {
    const product = await db('product')
      .where({ id: parseInt(id) })
      .first();

    if (product) {
      res.render('admin/editForm', { product }); // Corrected path
    } else {
      res.status(404).render('error', { message: 'Record not found' });
    }
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ message: 'Error fetching product data', error });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if a file is included in the request
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const updateFields = {
      ...req.body,
      updated_at: new Date(),
    };

    // Only update the images field if a file is included
    if (req.file) {
      updateFields.images = imagePath;
    }

    const count = await db('product').where({ id }).update(updateFields);

    if (count) {
      res.redirect('/admin/product');
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error updating product', error: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await db('product').where({ id }).del();
    return res.redirect('/admin/product');
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getViewDashboard,
  getViewProduct,
  createProduct: upload.single('images'),
  createProduct,
  updateProduct: upload.single('images'),
  updateProduct,
  deleteProduct,
  getUpdateProductID,
};

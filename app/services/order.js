const db = require('../../config/database');
const uuid = require('uuid');

const viewOrder = (req, res) => {
  res.render('productCart');
};

// Get orders by customer id
const getOrderbyID = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await db('order').where({ id }).select('*');
    return res.render('productCart', { orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add product to the cart
const createOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await db('order').where({ id }).select('*');
    return res.render('productCart', { orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

  const order = req.body;

  console.log(order);
  try {
    const payload = JSON.parse(
      req.body.map((row) => ({
        id: uuid.v4(),
        ...row,
        created_at: new Date(),
      })),
    );

    const result = await db('order').insert(payload).returning('*');

    res.render('productCart', { result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete order by ID
const deleteOrderbyID = async (req, res) => {
  try {
    const { id } = req.params;
    await db('order').where({ id }).del();
    return res.render('productCart');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { viewOrder, getOrderbyID, createOrder, deleteOrderbyID };

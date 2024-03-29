
const { calculatePrice } = require('../services/pricingService');

async function calculatePriceController(req, res, next) {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error('Error calculating price:', error);
    next(error);
  }
}

module.exports = {
  calculatePriceController,
};

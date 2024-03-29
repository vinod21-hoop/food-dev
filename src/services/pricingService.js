

const { Pricing } = require('../models');

async function calculatePrice(zone, organizationId, totalDistance, itemType) {
  // Query pricing data from the database based on zone, organization, and item type
  const pricingData = await Pricing.findOne({
    where: {
      organization_id: organizationId,
      zone: zone,
    },
  });

  if (!pricingData) {
    throw new Error('Pricing data not found for the specified zone and organization');
  }

  // Calculate total price based on the pricing data and total distance
  let totalPrice = pricingData.fix_price;
  if (totalDistance > pricingData.base_distance_in_km) {
    const additionalDistance = totalDistance - pricingData.base_distance_in_km;
    const additionalPrice = additionalDistance * pricingData.km_price;
    totalPrice += additionalPrice;
  }

  // If item is perishable, apply additional pricing
  if (itemType === 'perishable') {
    totalPrice += totalPrice * 0.5; // Assuming 50% additional price for perishable items
  }

  // Convert price to cents to avoid decimal issues
  totalPrice *= 100;

  return totalPrice;
}

module.exports = {
  calculatePrice,
};

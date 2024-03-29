const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const db = require('./models');
const pricingService = require('./services/pricingService');
const { validateRequest } = require('./middlewares/validationMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Swagger documentation setup
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.post('/calculate-price', validateRequest, async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const totalPrice = await pricingService.calculatePrice(zone, organization_id, total_distance, item_type);
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error('Error calculating price:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).json({ error: err.message });
});

// Start the server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
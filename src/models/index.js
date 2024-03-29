
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig);

const Organization = require('./Organization')(sequelize, Sequelize);
const Item = require('./Item')(sequelize, Sequelize);
const Pricing = require('./Pricing')(sequelize, Sequelize);

Organization.hasMany(Pricing, { foreignKey: 'organization_id' });
Item.hasMany(Pricing, { foreignKey: 'item_id' });

module.exports = {
  sequelize,
  Organization,
  Item,
  Pricing,
};

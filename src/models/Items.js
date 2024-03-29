// models/Item.js

module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.ENUM('perishable', 'non-perishable'),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Item;
  };
  


module.exports = (sequelize, DataTypes) => {
    const Pricing = sequelize.define('Pricing', {
      base_distance_in_km: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      km_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fix_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Pricing;
  };
  
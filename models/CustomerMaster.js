// Model structure for Authentication 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var CustomerMaster = sequelize.define("CustomerMaster",{
    // 'user_name' field stores User's name
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // 'Password' field stores the password
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // 
    isHaving_savings_account:{
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isHaving_current_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    // 
    isHaving_FixedDeposit_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    // 
    tone_anger_threshold: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return CustomerMaster;
};

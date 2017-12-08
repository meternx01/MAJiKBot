// Model structure for Authentication 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var CustomerAccountMaster = sequelize.define("CustomerAccountMaster",{
    // 'user_name' field stores User's name

    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // 
    savings_accountNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    savings_accountBalance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    current_accountNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    current_accountBalance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fixed_accountNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fixed_acc_MaturityDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  //An Account belongsTo Customer

  CustomerAccountMaster.associate = function(models){

    CustomerAccountMaster.belongsTo(models.CustomerMaster, {foreignKey: {
       allowNull: true
      }
     }); // closes belong to
  }
  return CustomerAccountMaster;
};

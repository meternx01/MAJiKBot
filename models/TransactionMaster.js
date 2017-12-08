// Model structure for Authentication 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var TransactionMaster = sequelize.define("TransactionMaster",{
    // 'amount' field stores transaction amount
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    //customer_id for a transaction
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // account number   
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // transaction category 'dining','grocery','travel','utility' 
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // ex: 'McDonalds','energy bill'
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // 
    date:{
      type: DataTypes.DATE,
      allowNull: false
    }
    
  });

  //A trasaction belongsTo Customer and his/her account

  TransactionMaster.associate = function(models){

    TransactionMaster.belongsTo(models.CustomerMaster, {foreignKey: {
       allowNull: true
      }
     }); // closes belong to
  }

  return TransactionMaster;
};

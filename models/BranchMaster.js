// Model structure for Authentication 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var BranchMaster = sequelize.define("BranchMaster",{
    // branch location
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // branch address
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // branch phone number
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // branch working hours
    working_hours: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return BranchMaster;
};

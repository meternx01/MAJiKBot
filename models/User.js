// Model structure for Authentication  for MAJIkBot app
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User",{
    // 'user_name' field stores User's name

    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // 'Password' field stores the password
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail: true,   
        isNull: false
      }
    },
  });
  return User;
};

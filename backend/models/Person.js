const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Person', {
    Personid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Zodiac: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Genre: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Personid" },
        ]
      },
    ]
  });
};

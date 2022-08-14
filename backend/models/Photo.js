const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Photo', {
    Photoid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Personid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'Personid'
      }
    },
    Url: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Photo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Photoid" },
        ]
      },
      {
        name: "Personid",
        using: "BTREE",
        fields: [
          { name: "Personid" },
        ]
      },
    ]
  });
};

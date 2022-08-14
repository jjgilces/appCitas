const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Match', {
    Personid1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'Personid'
      }
    },
    Personid2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Person',
        key: 'Personid'
      }
    },
    Content: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Match',
    timestamps: false,
    indexes: [
      {
        name: "Personid1",
        using: "BTREE",
        fields: [
          { name: "Personid1" },
        ]
      },
      {
        name: "Personid2",
        using: "BTREE",
        fields: [
          { name: "Personid2" },
        ]
      },
    ]
  });
};

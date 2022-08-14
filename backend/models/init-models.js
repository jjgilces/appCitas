var DataTypes = require("sequelize").DataTypes;
var _Match = require("./Match");
var _Message = require("./Message");
var _Person = require("./Person");
var _Photo = require("./Photo");
var _SequelizeMeta = require("./SequelizeMeta");

function initModels(sequelize) {
  var Match = _Match(sequelize, DataTypes);
  var Message = _Message(sequelize, DataTypes);
  var Person = _Person(sequelize, DataTypes);
  var Photo = _Photo(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);

  Match.belongsTo(Person, { as: "Personid1_Person", foreignKey: "Personid1"});
  Person.hasMany(Match, { as: "Matches", foreignKey: "Personid1"});
  Match.belongsTo(Person, { as: "Personid2_Person", foreignKey: "Personid2"});
  Person.hasMany(Match, { as: "Personid2_Matches", foreignKey: "Personid2"});
  Message.belongsTo(Person, { as: "Personid1_Person", foreignKey: "Personid1"});
  Person.hasMany(Message, { as: "Messages", foreignKey: "Personid1"});
  Message.belongsTo(Person, { as: "Personid2_Person", foreignKey: "Personid2"});
  Person.hasMany(Message, { as: "Personid2_Messages", foreignKey: "Personid2"});
  Photo.belongsTo(Person, { as: "Person", foreignKey: "Personid"});
  Person.hasMany(Photo, { as: "Photos", foreignKey: "Personid"});

  return {
    Match,
    Message,
    Person,
    Photo,
    SequelizeMeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

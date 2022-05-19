const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('videos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    titulo_seo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    seccion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    visitas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publicar: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'videos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

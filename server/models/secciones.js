const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('secciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    nombre_seo: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    nombre_corto: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombre_url: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    titulo_html: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    intro: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alt_img1: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    alt_img2: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    alt_img3: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    n_imagenes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publicar: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'secciones',
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

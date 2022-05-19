const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticias', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    user_creacion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    titulo_seo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fuente: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha_modificacion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user_modificacion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ruta_img1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alt_img1: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ruta_img2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alt_img2: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ruta_img3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alt_img3: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    video: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    codigo_video: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tipo_video: {
      type: DataTypes.STRING(10),
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
    tableName: 'noticias',
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

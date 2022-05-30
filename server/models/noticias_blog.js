const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticias_blog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
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
    user: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    intro: {
      type: DataTypes.STRING(230),
      allowNull: false
    },
    seo: {
      type: DataTypes.STRING(230),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ultima_modificacion: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    user_modificacion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ruta_img: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    alt_img: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    video: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    tipo_video: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    codigo_video: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    visitas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publicar: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    destacada: {
      type: DataTypes.BOOLEAN,
     defaultValue: false,
    }
  }, {
    sequelize,
    tableName: 'noticias_blog',
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

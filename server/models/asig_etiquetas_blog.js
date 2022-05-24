const Sequelize = require("sequelize");
module.exports =  (sequelize, DataTypes) => {
  const asig_etiquetas_blog = sequelize.define(
    "asig_etiquetas_blog",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_etiqueta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_noticia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },{
      sequelize,
      tableName: "asig_etiquetas_blog",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
  asig_etiquetas_blog.associate = (models) =>{
    asig_etiquetas_blog.hasMany(models.etiquetas_blog)
  }
  return asig_etiquetas_blog;
  }
  


var DataTypes = require("sequelize").DataTypes;
var _asig_etiquetas_blog = require("./asig_etiquetas_blog");
var _categorias = require("./categorias");
var _categorias_blog = require("./categorias_blog");
var _colaboradores = require("./colaboradores");
var _etiquetas_blog = require("./etiquetas_blog");
var _noticias = require("./noticias");
var _noticias_blog = require("./noticias_blog");
var _secciones = require("./secciones");
var _usuarios = require("./usuarios");
var _videos = require("./videos");
var _videos_blog = require("./videos_blog");

function initModels(sequelize) {
  var asig_etiquetas_blog = _asig_etiquetas_blog(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var categorias_blog = _categorias_blog(sequelize, DataTypes);
  var colaboradores = _colaboradores(sequelize, DataTypes);
  var etiquetas_blog = _etiquetas_blog(sequelize, DataTypes);
  var noticias = _noticias(sequelize, DataTypes);
  var noticias_blog = _noticias_blog(sequelize, DataTypes);
  var secciones = _secciones(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var videos = _videos(sequelize, DataTypes);
  var videos_blog = _videos_blog(sequelize, DataTypes);


  return {
    asig_etiquetas_blog,
    categorias,
    categorias_blog,
    colaboradores,
    etiquetas_blog,
    noticias,
    noticias_blog,
    secciones,
    usuarios,
    videos,
    videos_blog,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

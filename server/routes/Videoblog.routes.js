const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer")
const {sign} = require("jsonwebtoken")
const { validateToken } = require("../middleware/authmiddleware");


// asig_etiquetas_blog, categorias_blog, etiquetas_blog, noticias_blog, videos_blog, usuarios

module.exports = router;
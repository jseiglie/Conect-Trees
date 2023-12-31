const express = require("express");
const Sequelize = require("sequelize");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/authmiddleware");
const Op = Sequelize.Op;

const formater = (str) => {
  const strformater = str.replaceAll(" ", "-");
  return strformater;
};

const imgUploadPath = "../client/public/img_videoblog/noticias_img"; //CAMBIAR EN EL SERVIDOR

const {
  categorias_blog,
  asig_etiquetas_blog,
  etiquetas_blog,
  noticias_blog,
  secciones,
  videos_blog,
  sequelize,
} = require("../models");

////CATEGORIAS

router.get("/categorias", async (req, res) => {
  const categorias = await categorias_blog.findAll();
  res.json(categorias);
});

router.get("/categorias/:id", async (req, res) => {
  const id = req.params.id;
  const cat = await categorias_blog.findByPk(id);
  res.json(cat);
});

///ETIQUETAS
router.get("/etiquetas", async (req, res) => {
  const etiquetas = await etiquetas_blog.findAll();
  res.json(etiquetas);
});

////NOTICIAS
router.get("/noticias", async (req, res) => {
  const noticias = await noticias_blog.findAll({ where: { publicar: "SI" } });
  res.json(noticias);
});

//ULTIMAS NOTICIAS
router.get("/noticias/ultimas", async (req, res) => {
  const latest = await noticias_blog.findAll({
    where: { publicar: "SI" },
    order: [["fecha", "DESC"]],
  });
  res.json(latest);
});

//DELETE noticia

router.delete("/admin/noticias/:id", async (req, res) => {
  const id = req.params.id;
  await noticias_blog.destroy({
    where: {
      id: id,
    },
  });
  res.json("Noticia eliminada");
});

///ADD NOTICIAS
router.post("/admin/noticias", async (req, res) => {
  try {
    let payload = req.body;
    await noticias_blog.create(payload);
    res.json(payload);
  } catch (error) {
    res.json(error);
  }
});

//EDIT NOTICIAS
router.put("/admin/noticias/:id", async (req, res) => {
  const id = req.params.id;
  const {
    id_categoria,
    fecha,
    hora,
    user,
    intro,
    seo,
    descripcion,
    ultima_modificacion,
    user_modificacion,
    ruta_img,
    alt_img,
    video,
    tipo_video,
    codigo_video,
    publicar,
    destacada,
  } = req.body;
  await noticias_blog.update(
    {
      id_categoria: id_categoria,
      fecha: fecha,
      hora: hora,
      user: user,
      intro: intro,
      seo: formater(seo),
      descripcion: descripcion,
      ultima_modificacion: ultima_modificacion,
      user_modificacion: user_modificacion,
      ruta_img: ruta_img,
      alt_img: alt_img,
      video: video,
      tipo_video: tipo_video,
      codigo_video: codigo_video,
      publicar: publicar,
      destacada: destacada,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.json("Noticia actualizada");
});

//UPDATE COUNTER

router.put("/noticias/count/:id", async (req, res) => {
  const id = req.params.id;
  await noticias_blog.update(
    { visitas: sequelize.literal("visitas + 1") },
    { where: { id: id } }
  );
  res.json("Añadida visita");
});

///GET DESTACADA
router.get("/noticias/destacada", async (req, res) => {
  const payload = await noticias_blog.findAll({
    where: {
      destacada: 1,
      publicar: "SI",
    },
  });
  res.send(payload);
});

////NOTICIAS TELEDETECCION

router.get("/noticias/teledeteccion", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 1,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});

////NOTICIAS SOLUCIONES INTEGRALES
router.get("/noticias/solucionesintegrales", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 2,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});
////NOTICIAS RIEGO
router.get("/noticias/riego", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 3,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});
////NOTICIAS PROTECCION VEGETAL
router.get("/noticias/proteccionvegetal", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 4,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});
////NOTICIAS NUTRICION
router.get("/noticias/nutricion", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 5,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});
////NOTICIAS MARQUINARIA
router.get("/noticias/maquinaria", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 6,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});
////NOTICIAS SENSORIZACION
router.get("/noticias/sensorizacion", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 7,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});
////NOTICIAS BIG DATA
router.get("/noticias/bigdata", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 8,
      publicar: "SI",
    },
  });
  res.json(noticiastele);
});
//SECCIONES
router.get("/secciones", async (req, res) => {
  const seccionesVb = await secciones.findAll();
  res.json(seccionesVb);
});

///VIDEOS
router.get("/videos", async (req, res) => {
  const videos = await videos_blog.findAll();
  res.json(videos);
});

//ADD VIDEO
router.post("/videos", async (req, res) => {
  try {
    const payload = req.body;
    await videos_blog.create(payload);
    res.json(payload);
  } catch (error) {
    res.setEncoding(error);
  }
});

//GET ONE VIDEO

router.get("/admin/editnews/:id", async (req, res) => {
  const id = req.params.id;
  const payload = await noticias_blog.findByPk(id);
  res.json(payload);
});

//EDIT VIDEO
router.put("/admin/fulledit/:id", async (req, res) => {
  const id = req.params.id;
  const {
    id_categoria,
    fecha,
    hora,
    user,
    titulo,
    intro,
    seo,
    descripcion,
    ultima_modificacion,
    user_modificacion,
    ruta_img,
    alt_img,
    video,
    tipo_video,
    codigo_video,
    visitas,
    publicar,
    destacada,
  } = req.body;
  await noticias_blog.update(
    {
      id_categoria: parseInt(id_categoria),
      titulo: titulo,
      seo: formater(seo),
      ultima_modificacion: ultima_modificacion,
      user_modificacion: user_modificacion,
      tipo_video: tipo_video,
      codigo_video: codigo_video,
      publicar: publicar,
      destacada: destacada,
    },
    { where: { id: id } }
  );
  res.json("Noticia/Video actualizado correctamente");
});

// router.post("/admin/add", async (req, res) =>{
//   const payload = req.body;
//   await noticias_blog.create(payload)
// })

//get etiquetas
router.get("/asigetiquetas/:id_noticia", async (req, res) => {
  const id_noticia = req.params.id_noticia;
  const results = await sequelize.query(
    "SELECT asig_etiquetas_blog.id_etiqueta, asig_etiquetas_blog.id_noticia, etiquetas_blog.nombre, etiquetas_blog.id FROM asig_etiquetas_blog, etiquetas_blog WHERE etiquetas_blog.id=asig_etiquetas_blog.id_etiqueta AND asig_etiquetas_blog.id_noticia=?",
    { replacements: [id_noticia] }
  );
  res.json(results);
});

//Mostrar Noticia
router.get("/news/:id", async (req, res) => {
  const id = req.params.id;
  const news = await noticias_blog.findByPk(id);
  res.json(news);
});

//EDIT noticia Publicar
router.put("/admin/noticias/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { publicar } = req.body;
  await noticias_blog.update({ publicar: publicar }, { where: { id: id } });
  res.json("Publicar actualizado");
});

//EDIT noticia destacada
router.put("/noticias/destacada/:id", async (req, res) => {
  const id = req.params.id;
  const { destacada } = req.body;
  await noticias_blog.update({ destacada: destacada }, { where: { id: id } });
  res.json("Publicar actualizado");
});

router.get("/noticias/:q", async (req, res) => {
  const q = req.params.q;
  console.log(`'%${q}'`);
  const resp = await noticias_blog.findAll({
    where: { titulo: { [Op.like]: `%${q}%` } },
  });
  res.json(resp);
});

//intentional delay on undefined

router.get("/noticias/undefined", async (req, res) => {
  const delay = setTimeout(() => {
    res.json({ error: 404 });
  }, 100);
  return delay;
});

module.exports = router;

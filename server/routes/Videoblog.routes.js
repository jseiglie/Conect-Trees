const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/authmiddleware");

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
  const noticias = await noticias_blog.findAll();
  res.json(noticias);
});

///ADD NOTICIAS
router.post("/noticias/", async (req, res) => {
  try {
    let payload = req.body;
    await noticias.create("Noticia creada" + payload);
    res.json(payload);
  } catch (error) {
    res.setDefaultEncoding(error);
  }
});

//EDIT NOTICIAS
router.put("/noticias/:id", async (req, res) => {
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
  } = req.body;
  await noticias.update(
    {
      id_categoria: id_categoria,
      fecha: fecha,
      hora: hora,
      user: user,
      intro: intro,
      seo: seo,
      descripcion: descripcion,
      ultima_modificacion: ultima_modificacion,
      user_modificacion: user_modificacion,
      ruta_img: ruta_img,
      alt_img: alt_img,
      video: video,
      tipo_video: tipo_video,
      codigo_video: codigo_video,
      publicar: publicar,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.json("Noticia actualizada");
});

////NOTICIAS TELEDETECCION

router.get("/noticias/teledeteccion", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 1,
    },
  });
  res.json(noticiastele);
});

////NOTICIAS SOLUCIONES INTEGRALES
router.get("/noticias/solucionesintegrales", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 2,
    },
  });
  res.json(noticiastele);
});
////NOTICIAS RIEGO
router.get("/noticias/riego", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 3,
    },
  });
  res.json(noticiastele);
});
////NOTICIAS PROTECCION VEGETAL
router.get("/noticias/proteccionvegetal", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 4,
    },
  });
  res.json(noticiastele);
});
////NOTICIAS NUTRICION
router.get("/noticias/nutricion", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 5,
    },
  });
  res.json(noticiastele);
});
////NOTICIAS MARQUINARIA
router.get("/noticias/maquinaria", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 6,
    },
  });
  res.json(noticiastele);
});
////NOTICIAS SENSORIZACION
router.get("/noticias/sensorizacion", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 7,
    },
  });
  res.json(noticiastele);
});
////NOTICIAS BIG DATA
router.get("/noticias/bigdata", async (req, res) => {
  const noticiastele = await noticias_blog.findAll({
    where: {
      id_categoria: 8,
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

//EDIT VIDEO
router.put("/videos", async (req, res) => {
  const id = req.params.id;
  const { titulo, titulo_seo, tipo, codigo, publicar } = req.body;
  await videos_blog.update(
    {
      titulo: titulo,
      titulo_seo: titulo_seo,
      tipo: tipo,
      codigo: codigo,
      publicar: publicar,
    },
    { where: { id: id } }
  );
  res.json("Noticia/Video actualizado correctamente");
});

//Mostrar Noticia
router.get("/news/:id", async (req, res) => {
  const id = req.params.id;
  const news = await noticias_blog.findByPk(id);
  res.json(news);
});

//get etiquetas
router.get("/asigetiquetas/:id_noticia", async (req, res) => {
  const id_noticia = req.params.id_noticia;
  const results = await sequelize.query(
    "SELECT asig_etiquetas_blog.id_etiqueta, asig_etiquetas_blog.id_noticia, etiquetas_blog.nombre, etiquetas_blog.id FROM asig_etiquetas_blog, etiquetas_blog WHERE etiquetas_blog.id=asig_etiquetas_blog.id_etiqueta AND asig_etiquetas_blog.id_noticia=?",
    { replacements: [id_noticia] }
  );
  res.json(results);
});


//intentional delay on undefined

router.get("/noticias/undefined", async (req, res)=>{
   const delay = setTimeout((() => {
    res.json({error: 404})
  }), 100)
  return delay
})

module.exports = router;

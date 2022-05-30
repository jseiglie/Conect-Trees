const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/authmiddleware");

const formater = (str) =>{
  const strformater = str.replaceAll(' ', '-');
  return strformater
}

///IMAGENES

const imgUploadPath = "../client/public/img/noticias_img"; //CAMBIAR EN EL SERVIDOR

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imgUploadPath);
  },
  filename: function (req, file, cb) {
    imageName = `${file.originalname}`;
    cb(null, imageName);
  },
});

const imgUpload = multer({ storage: storage });

router.post("/admin/images", imgUpload.array("my-image-file"), (req, res) => {
  console.log("POST request received to /image-upload.");
  console.log("Axios POST body: ", req.body);
  res
    .status(201)
    .json({ url: "../client/public/img/noticias_img/" + imageName });
});

router.get("/admin/images", validateToken, (req, res) => {
  res.json("working");
});

const {
  categorias,
  colaboradores,
  noticias,
  secciones,
  videos,
  usuarios,
  sequelize,
} = require("../models");

///COLABS
//get colabs
router.get("/colaboradores", async (req, res) => {
  const colabList = await colaboradores.findAll();
  res.json(colabList);
});

// add colab
router.post("/colaboradores", validateToken, async (req, res) => {
  try {
    let payload = req.body;
    await colaboradores.create(payload);
    res.json(payload);
  } catch (error) {
    res.setEncoding(error);
  }
});

router.get("/colaboradores/edit/:id", async (req, res) => {
  const id = req.params.id;
  const colaborador = await colaboradores.findByPk(id);
  res.json(colaborador);
});

//edit colab
router.put("/colaboradores/edit/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  const { nombre, slug, url, info, logo } = req.body;
  await colaboradores.update(
    { nombre: nombre, slug: slug, url: url, info: info, logo: logo },
    { where: { id: id } }
  );
  res.json("Colaborador actualizado correctamente");
});

//del colab
router.delete(
  "/colaboradores/eliminar/:id",
  validateToken,
  async (req, res) => {
    const id = req.params.id;
    await colaboradores.destroy({
      where: {
        id: id,
      },
    });
    res.json("Colaborador eliminado");
  }
);

///connectlovers
//get connectlovers
router.get("/connectlovers", async (req, res) => {
  const clList = await videos.findAll({
    where: {
      seccion: "connectlovers",
    },
  });
  res.json(clList);
});

//edit connectlovers
router.put("/connectlovers/edit/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  const { nombre, slug, url, info, logo } = req.body;
  await videos.update(
    { nombre: nombre, slug: slug, url: url, info: info, logo: logo },
    { where: { id: id } }
  );
  res.json("Noticia actualizado correctamente");
});

//del connectlovers
router.delete(
  "/connectlovers/eliminar/:id",
  validateToken,
  async (req, res) => {
    const id = req.params.id;
    await videos.destroy({
      where: {
        id: id,
      },
    });
    res.json("Noticia eliminada");
  }
);

///DigiTraining
//get Digitraining
router.get("/digitraining", async (req, res) => {
  const payload = await videos.findAll({
    where: {
      seccion: "digitraining",
    },
  });
  res.json(payload);
});

//del Digitraining
router.delete("/digitraining/eliminar/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  await videos.destroy({
    where: {
      id: id,
    },
  });
  res.json("Noticia eliminada");
});

//connecnews
router.get("/connecnews", async (req, res) => {
  const payload = await noticias.findAll();
  res.json(payload);
});
// ConnecNews EDIT
router.get("/connecnews/edit/:id", async (req, res) => {
  const id = req.params.id;
  const payload = await noticias.findByPk(id);
  res.json(payload);
});

// add to video table
router.post("/addtovideo", validateToken, async (req, res) => {
  try {
    let payload = req.body;
    await videos.create(payload);
    res.json(payload);
  } catch (error) {
    res.setEncoding(error);
  }
});

//delete

router.delete("/connecnews/eliminar/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  await noticias.destroy({
    where: {
      id: id,
    },
  });
  res.json("Noticia eliminada");
});
/////////Videos edit
//get
router.get("/editvideo/:id", async (req, res) => {
  const id = req.params.id;
  const payload = await videos.findByPk(id);
  res.json(payload);
});
//put
router.put("/editvideo/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  const { titulo, titulo_seo, tipo, codigo, seccion, publicar } = req.body;
  await videos.update(
    {
      titulo: titulo,
      titulo_seo: formater(titulo_seo),
      tipo: tipo,
      codigo: codigo,
      seccion: seccion,
      publicar: publicar,
    },
    { where: { id: id } }
  );
  res.json("Noticia/Video actualizado correctamente");
});

// add to noticia table
router.post("/addtonews", validateToken, async (req, res) => {
  try {
    const payload = req.body;
    //const username = req.user.username;
    await noticias.create(payload);
    res.json(payload);
  } catch (error) {
    res.setEncoding(error);
  }
});

// edit to noticia table
router.put("/addtonews/:id", validateToken, async (req, res) => {
  const id = req.params.id;
  const {
    user_modificacion,
    titulo,
    titulo_seo,
    fecha_modificacion,
    intro,
    contenido,
    ruta_img1,
    ruta_img2,
    ruta_img3,
    alt_img1,
    alt_img2,
    alt_img3,
    categoria,
    codigo_video,
    video,
    tipo_video,
    fuente,
    publicar,
  } = req.body;
  //const username = req.user.username;
  await noticias.update(
    {
      alt_img1: alt_img1,
      alt_img2: alt_img2,
      alt_img3: alt_img3,
      categoria: categoria,
      codigo_video: codigo_video,
      contenido: contenido,
      fecha_modificacion: fecha_modificacion,
      fuente: fuente,
      intro: intro,
      publicar: publicar,
      ruta_img1: ruta_img1,
      ruta_img2: ruta_img2,
      ruta_img3: ruta_img3,
      tipo_video: tipo_video,
      titulo: titulo,
      titulo_seo: formater(titulo_seo),
      user_modificacion: user_modificacion,
      video: video,
    },
    { where: { id: id } }
  );
  res.json("Edición satisfactoria");
});

///LOGIN

router.post("/login", async (req, res) => {
  const { usuario, password } = req.body;
  const user = await usuarios.findOne({ where: { usuario: usuario } });
  if (!user) {
    res.json({ error: "Usuario no existe" });
    return;
  }
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "usuario y/o contraseña incorrecto" });
      return;
    }
    const accessToken = sign(
      { username: user.username, id: user.id },
      "n9LKWwL2u0AMphq2nuoB"
    );
    res.json(accessToken);
  });
});

//REGISTER

router.post("/register", validateToken, async (req, res) => {
  const { nombre, usuario, password, permisos, avatar, publicar } = req.body;
  bcrypt.hash(password, 8).then((hash) => {
    usuarios.create({
      nombre: nombre,
      usuario: usuario,
      password: hash,
      permisos: permisos,
      avatar: avatar,
      publicar: publicar,
    });
    res.json("Usuario creado");
  });
});

//checks for validToken
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});




router.post("/contacto", async (req, res) => {
  console.log(req.body)
  // await nodemailer.createTestAccount((err, account) => {
  // });
  const htmlEmail = `
  <h3>Nuevo contacto</h3>
  <p>Se ha recibido un nuevo contacto desde ConnecTrees Digitalhub, a continuación los datos:</p>
  <ul>
  
  <li>Nombre: ${req.body.payload.name}</li>
  <li>Apellido: ${req.body.payload.surname}</li>
  <li>Empresa: ${req.body.payload.emporg}</li>
  <li>Correo: ${req.body.payload.mail}</li>
  </ul>
  `;

  let transporter = nodemailer.createTransport({
    sendMail: true,
    host: "mail.connectrees.es",
    port: 25,
    secure: false,
    //host: SMTP_HOST,
    auth: {
      user: "info@conectrees.es", // NECESITA USUARIO
      pass: "C0nn3c%%", // NECESITA PASS
    },
    tls:{
      rejectUnauthorized:false  // if on local
    }
  });

  let mailOptions = {
    from: "info@connectrees.es", // quien envia el email
    to: req.body.payload.mail, //email destino
    subject: "Nuevo contacto desde Digitalhub",
    html: htmlEmail,
  };

  let info = await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
  });
  console.log("URL del mensaje", nodemailer.getTestMessageUrl(info));
});


router.get("/contacto", (req, res) =>{
  res.json("test")
  
})


module.exports = router;

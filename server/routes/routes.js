const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/authmiddleware"); //PAra usar Validate, ponerlo asi router.post("/login", validateToken, async (req, res) => {

//getAll

router.get("/", async (req, res) => {
  const allUsers = await Usuarios.findAll();
  res.json(allUsers);
});

// //ADD
// router.post("/", async (req, res) =>{
//     const payload = req.body;
//     await Usuarios.create(payload);
//     res.json(payload);
// })


//login
router.post("/login", async (req, res) => {
  const { user, password } = req.body;
  const userExists = await Usuarios.findOne({ where: { user: user } }); // busca si el usuario existe en la tabla
  if (!userExists) {
    return res.json({ error: "Usuario no existe" });
  }
  bcrypt.compare(password, userExists.password).then((match) => {
    if (!match) res.json({ error: "Usuario y / o contraseña incorrecta" });
    if (match) {
        console.log(userExists.permisos)
      
      const accessToken = sign(
        { user: Usuarios.user, id: Usuarios.id },
        "n9LKWwL2u0AMphq2nuoB" //cambiar luego de Lugar
      );
      res.json([accessToken, userExists.permisos]);
      
      
    }
  });
});

module.exports = router;

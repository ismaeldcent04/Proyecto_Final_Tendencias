const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  contraseña: String,
  idusuario: String,
});

const User = mongoose.model("User", userSchema);
module.exports = router;

router.get("/register", (req, res) => {
  res.end("Hola esta es la pagina de registro");
});

router.post("/register", (req, res) => {
  console.log(req.body.email);
  res.send(req.body.nombre);
  const newUser = new User({
    nombre: req.body.nombre,
    email: req.body.email,
    contraseña: req.body.contraseña,
    idusuario: req.body.idusuario,
  });
  newUser.save(function (err) {
    if (!err) {
      res.send("Usuario agregado correctamente");
    } else {
      res.send(err);
    }
  });
});

router.get("/login", (req, res) => {
  res.end("Hola esta es la pagina de login");
});
router.post("/login", (req, res) => {
  const nombre = req.body.nombre;
  const contraseña = req.body.contraseña;
  console.log(nombre, contraseña);

  User.findOne({ nombre: nombre }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.contraseña === contraseña) {
          res.send("Usuario existe, entrando al home....");
        } else {
          res.send("Credenciales incorrectas, por favor intenta de nuevo");
        }
      }
    }
  });
});

router.get("/home", (req, res) => {
  res.end("Hola esta es la pagina de home");
});

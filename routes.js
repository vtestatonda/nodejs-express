const express = require("express");
const router = express.Router();
//lo que hicimos es importar express, router. Cmabiamos app. por router. y lo exportamos

//RUTAS
// / imagenes
router.get("/", (req, res) => {
  //la / es la ruta inicial
  // res.end("hello world");
  res.render("index.ejs");
});

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

module.exports = router;

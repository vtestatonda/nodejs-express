const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //si me piden la ruta incial / les envio un jason
  res.json({
    miprimerApi: "Works!",
  });
});
//enviamos un json porque en la transferencias de datos se hacen a traves de json
module.exports = router;

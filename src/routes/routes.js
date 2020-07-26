const router = require("express").Router();
const { render, post } = require("../controllers/generador.ctrl");

router
  .route("/")

  .get((req, res) => {
    res.render("index");
  });

router
  .route("/generador")

  .get(render)
  .post(post);

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  res.render("index");
});

router.get("/how-it-works", (req, res) => {
  res.render("how-it-works");
});

module.exports = router;

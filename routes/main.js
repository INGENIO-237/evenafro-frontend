const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  res.render("index", { layout: "index-layout.ejs" });
});

router.get("/how-it-works", (req, res) => {
  res.render("how-it-works");
});
router.get("/policies", (req, res) => {
  res.render("policies");
});
router.get("/cookies", (req, res) => {
  res.render("cookies");
});

module.exports = router;

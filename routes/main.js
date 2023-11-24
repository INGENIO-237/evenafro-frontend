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

module.exports = router;

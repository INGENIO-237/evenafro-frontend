const express = require("express");
const layouts = require("express-ejs-layouts");

// Initialize app
const app = express();

// Set PORT
const PORT = 10000;

// Accept multi-form data
app.use(express.urlencoded({ extended: false }));

// Define default layout and templating
app.set("view engine", "ejs");
app.set("views", "views");

// Static files
app.use(express.static("public"));

// app.set("views")
app.use(layouts);

// Routes
app.use("", require("./routes/main"));

// Launch app
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

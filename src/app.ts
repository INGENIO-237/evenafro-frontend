import express from "express";
import dotenv from "dotenv";
import layouts from "express-ejs-layouts";
import main from "./routes/main";

// Envireonment variables
dotenv.config();

// Initialize app
const app = express();

// Set PORT
const PORT = process.env.PORT || 5000;

// Accept multi-form data
app.use(express.urlencoded({ extended: false }));

// Define default layout and templating
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Static files
app.use(express.static(__dirname + "/public"));

// app.set("views")
app.use(layouts);

// Routes
app.use("", main);

// Launch app
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

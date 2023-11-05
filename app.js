const express = require("express");
const app = express();
const hbs = require('hbs');
require('dotenv').config()
const port=process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//Servir contenido estatico con url '/'
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Mateo",
    titulo: "Curso de Node",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Mateo",
    titulo: "Curso de Node",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Mateo",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);

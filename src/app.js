 const express = require('express');
 const app = express();
 const path = require("path");
 const hbs = require("hbs");



 const port = process.env.PORT || 3000;


 app.use(express.static(path.join(__dirname, "../public")));

 const partials_path = path.join(__dirname, "../templates/partials");
 const views_path = path.join(__dirname, "../templates/views");

 app.set("view engine", "hbs");
 app.set("views", views_path);
 hbs.registerPartials(partials_path);


 app.get("/", (req, res) => {
     res.render("index")
 })

 app.get("/weather", (req, res) => {
     res.render("weather")
 })

 app.get("/about", (req, res) => {
     res.render("about")
 })

 app.get("*", (req, res) => {
     res.render("404error", {
         errorMsg: "Oops! Page Not Found"
     })
 })

 app.listen(port, () => {
     console.log(`Server started on ${port}`);
 });
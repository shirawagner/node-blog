const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// express app

const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://shirawagner:305158099@nodeblog.adddq.mongodb.net/nodeBlog?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(3000);
    console.log("connect to db");
  })
  .catch((err) => console.log(err));

//register view engine

app.set("view engine", "ejs");
//listen to requests

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

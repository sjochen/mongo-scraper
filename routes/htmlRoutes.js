var router = require("express").Router();
var db = require("../models/articles");

router.get("/", function (req,res) {
   //   db.Article.find().then(function (dbArticles) {
      //   res.render("home", {articles: dbArticles});
        res.render("home");
   // })
});

module.exports = router;


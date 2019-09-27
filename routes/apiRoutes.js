var db = require("../models/articles");
var axios = require("axios");
var router = require("express").Router();
var cheerio = require("cheerio");

router.get("/scrape", function (req,res) {
    axios.get("https://sports.yahoo.com/").then(function (response) {
        var $ = cheerio.load(response.data);
        // console.log(response.data);

        var scrapeData = [];

        $("div .Ov(h)").each(function (i, element) {
            scrapeData.push($(this).find("h3"));
        });

        console.log("Scraped Data: ", scrapeData);
        

        res.send("Scrape completed!!");
        
    })
});

module.exports = router;
var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function (cb) {
    axios("http://www.nytimes.com").then(function (response) {
        var $ = cheerio.load(response.data);

        var articles = [];

        $(".theme-summary").each(function (i, element) {
            var head = $(element).children(".story-heading").text().trim();
            var sum = $(element).children(".summary").text().trim();
            
            if(head && sum) {
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, "").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, "").trim();

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);

            }
        });

        cb(articles);
        console.log(articles);
        
    });
};

module.exports = scrape;
var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");
var Headline = require("../models/Headline");

module.exports = {
    fetch: function(cb) {
        scrape(function(data) {
            var articals = data;
            for (var i=0; i < articals.length; i++) {
                articals[i].date = makeDate();
                articals[i].saved = false;
            }

            Headline.collection.insertMany(articals, {ordered:false}, function(err, docs) {
                cb(err, docs);
            });
        });
    },

    delete: function(query, cb) {
        Headline.remove(query, cb);
    },

    get: function(query, cb) {
        Headline.find(query)
        .sort({
            _id: -1
        })
        .exec(function(err, doc) {
            cb(doc);
        });
    }
}

module.exports = function(router) {
    // Route for home
    router.get("/", function(req, res) {
        res.render("home");
    });

    // Route for Saved Articles
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}
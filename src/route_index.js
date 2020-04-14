const homePage = require('./homePage');

module.exports = {
    homePage: function(server) {
        server.get("/", homePage.homePageHandler)
    }
}

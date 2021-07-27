const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use( 
        proxy("/rest/v2/all", {
            target: "https://restcountries.eu",
            secure: false,
            changeOrigin: true
        }))
    app.use( 
        proxy("/current", {
            target: "https://api.weather.gov",
            secure: false,
            changeOrigin: true
        })
    )
    
}
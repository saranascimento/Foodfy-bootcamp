const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    let recipesFilter = []
    
    for (let count = 0; count < 6; count++){
        recipesFilter.push(recipes[count])
        
    }
    return res.render("home", {items: recipesFilter})
    
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", {items: recipes})
})

server.get("/about", function(req, res) {
    return res.render("about")
    
})

server.listen(5000, function() {
    console.log("Server is running")
})
const express = require('express') 
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const data_about = {
        name: "Rocketseat",
        logo: "logoRocketseat.jpg",
        description: "A menor distância entre você e seus objetivos como programador.",
        technologies: [{
                name: "HTML"
            },
            {
                name: "CSS"
            },
            {
                name: "JavaScript"
            },
            {
                name: "NodeJS"
            },
            {
                name: "React"
            }
        ],
        links: [{
                name: "GitHub",
                url: "https://github.com/Rocketseat"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/rocketseat_oficial/"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/rocketseat"
            }
        ]
    }
    return res.render("about", {
        data_about
    })
})

server.get("/courses", function (req, res) {
    return res.render("courses", {courses})
})

server.get("/description-course", function(req, res) {
    const id = req.query.id

    const course = courses.find(function(course) {
        return course.name == id
    })

    return res.render("description-course", {item: course})
})

server.use(function (req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function () {
    console.log("server is running")
})
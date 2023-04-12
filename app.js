const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

//midlewares
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

//database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // POUR MOI C'EST ROOT
    database: 'mean'
})


// ROUTES
app.get('/', function (req, res) {
    connection.execute(
        'SELECT * FROM `driver_info` ', (err, data)=>{
            if(err) throw err;
            // si tout va bien 
            // res.json(data) // angular
            res.render('drivers', {
                title:'Drivers',
                drivers : data
            })
            
        }
        );

   
})

// route pour afficher le formulaire pour ajouter un driver
app.get('/new-driver', (req,res)=>{
    res.render('new-driver')
})
// route pour ajouter un driver dans la base de donnée
app.post('/new-driver', (req,res)=>{
    console.log(req.body)
    // let fullName = req.body.fullName
    // let pays = req.body.pays
    // let coverImage = req.body.coverImage
    // let category = req.body.category
    // let likeIts = 0

    connection.execute(`INSERT INTO driver_info(fullName,pays,coverImage,category,likeIts) 
                        VALUES('${req.body.fullName}','${req.body.pays}', '${req.body.coverImage}', '${req.body.category}', '0')`,
     (err)=>{
        //si y a err affiche la
        if(err) throw err;
        // redirection vers la page d'accueil
        res.redirect('/')
     })
})






// SERVER
app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000' )
})
const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')

//midlewares
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))



// DATA
const drivers = [
    {
      id: 1,
      fullName: "ken block",
      pays: "usa",
      coverImage: "assets/images/drivers/kenblock.jpg",
      category: "gymkhana",
      likeIts: -1
    },
    {
      id: 2,
      fullName: "danIca patricK",
      pays: "usa",
      coverImage: "assets/images/drivers/danicapatrick.jpg",
      category: "nascar",
      likeIts: 0
    },
    {
      id: 3,
      fullName: "sebastien loeb",
      pays: "france",
      coverImage: "assets/images/drivers/Loeb.jpg",
      category: "rallye",
      likeIts: 1
    },
    {
      id: 4,
      fullName: "molly taylor",
      pays: "australie",
      coverImage: "assets/images/drivers/mollytaylor.jpg",
      category: "rallye",
      likeIts: -1
    },
    {
      id: 5,
      fullName: "collin mcrae",
      pays: "écosse",
      coverImage: "assets/images/drivers/colin.jpg",
      category: "rallye",
      likeIts: 0
    },
    {
      id: 6,
      fullName: "shirley muldowney",
      pays: "usa",
      coverImage: "assets/images/drivers/shirleymuldowney.jpg",
      category: "drag",
      likeIts: 5
    },
    {
      id: 7,
      fullName: "michael schumacher",
      pays: "allemagne",
      coverImage: "assets/images/drivers/schumacher.jpg",
      category: "formule 1",
      likeIts: 0
    },
    {
      id: 8,
      fullName: "erica enders",
      pays: "usa",
      coverImage: "assets/images/drivers/ericaenders.jpg",
      category: "drag",
      likeIts: 0
    },
    {
      id: 9,
      fullName: "valentino rossi",
      pays: "italia",
      coverImage: "assets/images/drivers/rossi.jpg",
      category: "drag",
      likeIts: 0
    },
  ];

// ROUTES
app.get('/drivers', function (req, res) {
    res.render('drivers', {
        drivers: drivers,
        title:"*Drivers*"})
})

// SERVER
app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000' )
})
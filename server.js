const express = require('express')
const app = express()
const port = 3000
//Package to determine what dir your in 
const path = require('path');
//Body-parse Import
const bodyParser = require("body-parser");
//Parse the body 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying');
})

//CALLING DIFFERENT URL
app.get('/hello/:name', (req, res) =>{ 
    //prints the name you put after / to the console.
    console.log(req.params.name);
    //Prints Out name entered on web server
    res.send('Hello ' + req.params.name);
})

//Route for api that will return json data.
app.get('/api/movies', (req,res) => {
    //Will send Json data back.
    const mymoives =[
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
                }
            ];
            res.json({movies:mymoives});
});

//A Route that will return a HTML page.
app.get('/test', (req, res) => {
    //Request to send a file
    res.sendFile(__dirname + '/index.html');
})

//Route to return a form
app.get('/name', (req,res) => {
    //Send back text first name and last name of user.
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//POST request
app.post('/name', (req,res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
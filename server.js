const express = require("express"),
      app =express(),
      bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"));


app.get('/', function (req, res) {
  res.render('index.ejs')
});

app.get('/snake', function (req, res) {
    res.render('snake.ejs')
  })

app.get('/flappy', function (req, res) {
    res.render('flappy.ejs')
});


app.get('/shooter', function (req, res) {
  res.render('shooter.ejs')
});


app.get('/tertis', function (req, res) {
  res.render('tertis.ejs')
});


app.get('/breakout', function (req, res) {
  res.render('breakout.ejs')
});

app.get('/pong', function (req, res) {
  res.render('pong.ejs')
});
  

app.listen(process.env.PORT || 8080, function(){
    console.log("Server started At port 8080");
});
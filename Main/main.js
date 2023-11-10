var express = require('express');
const path= require("path");
var schema = require('../Model/schema.js');
require('../Config/config.js');

var app = express();
app.use(express.json());

var Port = 4000;

const staticPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.use(express.static(staticPath));


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/getAllUsers', async function(req, res) {
    var data = await schema.User.find();
    console.log(data);
    res.send(data);
});
// Existing code...

app.post('/create', async function(req, res) {
    var usersData = req.body;
    for (var i = 0; i < usersData.length; i++) {
        var data = new schema.User(usersData[i]);
        await data.save();
    }
    res.send(usersData);
});
app.listen(Port, function() {
    console.log('Server is running on https://localhost:4000/getAllUsers');
});

// Existing code...


// app.post('/create', async function(req, res) {
//     var usersData = req.body;
//     for (var i = 0; i < usersData.length; i++) {
//         var data = new schema.User(usersData[i]);
//         await data.save();
//     }
//     res.render(usersData);
// });

// app.get('/getUsers/:count', async function(req, res) {
//     var count = parseInt(req.params.count, 10);
//     var data = await schema.User.find().limit(count);
//     res.send(data);
// });

// app.get('/getUserById/:name', async function(req, res) {
//     var userId = req.params.name;
//     var user = await schema.User.findOne({ name: userId });
//     res.send(user);
// });

// app.delete('/deleteUser/:name', async function(req, res) {
//     var userName = req.params.name;
//     var result = await schema.User.deleteOne({ name: userName });
//     res.send(result);
// });


const express = require('express');
const path = require('path');
const bodyPareser = require('body-parser')
const app = express();

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
//app.use(express.static(path.join(__dirname, 'bower_components/')));
app.use(express.static(path.join(__dirname, 'assets/')));
app.use(bodyPareser());

//define routes
app.use(require('./todos'));

//Listen on port
const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Server running at port:${port}...`));
const express = require('express');
const multer = require('multer');
const exhbs = require('express-handlebars');
const path = require('path');
const upload = multer({dest: 'uploads/'});

const app = express();

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3001, () => {
    console.log('express is listening http://localhost:3001');
});

const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const contacts = require('./contacts');

const app = express();
const fs = require('fs');

const port = 5001;

app.use('/static', express.static('public'));

app.use(bodyParser.urlencoded({extentedn : false}));
app.engine('.hbs', handlebars({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) =>{
    res.render('home', contacts.read_all());
});

app.post('/add-contact', (req, res) =>{
    let contactName = req.body.contact;
    let contactMail = req.body.mail;
    contacts.add_contact(contactName, contactMail);

    res.redirect('/');
});

app.post('/remove-contact', (req, res) => {

});




app.listen(port, () => console.log(`this server is running on port ${port}..`));
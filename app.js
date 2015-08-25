
var express = require('express'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    methodOverride = require('method-override'),
    path = require('path'),
    routes = require('./routes'),
    api = require('./routes/api');

var app = module.exports = express();

app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(methodOverride());
// app.use(favicon());
app.use(express.static(__dirname + '/public'));


// Routes
app.route('/').get(routes.index);

// JSON API
app.get('/api/persons', api.listPersons);
app.post('/api/persons', api.addPerson);
app.put('/api/persons/:id', api.editPerson);
app.delete('/api/persons/:id', api.deletePerson);

// redirect all others to the index (HTML5 history)
app.route('*').get(routes.index);

// Start server
app.listen(3000, function(){
  console.log("Express server listening on port 3000");
});

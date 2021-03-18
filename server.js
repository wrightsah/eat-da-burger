// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const orm = require('./config/orm');

// Create express instance
const app = express();
const PORT = process.env.PORT || 8080;

// Use static files
app.use(express.static(('public')));

// Set up express app to handle data parsing
app.subscribe(express.urlencoded({ extended: true}));
app.use(express.json());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes 
// app.use(routes);

// GET

app.get('/', (req, res) => {
    orm.selectAll('burgers', function(data) {
        res.render('index', { burgers : data });
    });
});

// Start Server
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

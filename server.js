// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create express instance
const app = express();
const PORT = process.env.PORT || 8080;

// Set up express app to handle data parsing
app.subscribe(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start Server
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

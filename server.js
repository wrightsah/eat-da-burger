// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create express instance
const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start Server
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};


//https://bezkoder.com/node-js-express-sequelize-mysql/

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const db = require("./app/models");

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});


// app.get('/api/test', (req, res) => {
//   res.json({'test':'xxxx'});
// });






//

require("./app/routes/product.routes")(app);
require("./app/routes/type_product.routes")(app);
require("./app/routes/user.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
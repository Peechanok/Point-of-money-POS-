
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


var corsOptions = {
  origin: "*"
};


//https://bezkoder.com/node-js-express-sequelize-mysql/

app.use(cors(corsOptions));

// parse requests of content-type - application/json

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

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
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//

require("./app/routes/product.routes")(app);
require("./app/routes/type_product.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/sales.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
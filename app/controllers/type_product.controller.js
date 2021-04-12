const db = require("../models");
const Type_Product = db.type_product;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  //res.send(req.body);
  const type_prod = {
    type_name: req.body.type_name,
    type_description: req.body.type_description,
   
    
    
  };

  // Save Tutorial in the database
  Type_Product.create(type_prod)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findData = (req, res) => {
  if(req.params && req.params.id)
  {
    if(req.params.id === 'all'){
      const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Type_Product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    
    }else if(req.params.id > 0){
      const id = req.params.id;

    Type_Product.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
    }
    

  }else{
    res.json({'test':'Not foud xxx'});
  }

  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  res.json({'xid':req.params.id});
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  res.json({'test':'update'});
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  res.json({'test':'delete'});
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  res.json({'test':'deleteAll'});
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  res.json({'test':'findAllPublished'});
};
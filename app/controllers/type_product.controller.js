const db = require("../models");
const Type_Product = db.type_product;
const Op = db.Sequelize.Op;
const Product = db.product;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  //res.send(req.body);
  const type_prod = {
    type_name: req.body.type_name,
    type_description: req.body.type_description,

    
  };
  const prod = {
    type_product_id: req.body.type_product_id,
    
    
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
  let product_TypeId = req.params.id;

  
  Type_Product.destroy({
    where: { id: product_TypeId }

  })
  
  // Product.destroy({
  //     where: {type_product_id:product_TypeId } != null ?{type_product_id:product_TypeId }  : {type_product_id:type_product_id }
  // })
  

     
 .then(num => {
      if (num == 1) {
        res.send({
          message: "Product_type was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product_type with id=${id}. Maybe Product_type was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product_type with id=" + id
      });
    });
  

};


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  res.json({'test':'deleteAll'});
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  res.json({'test':'findAllPublished'});
};
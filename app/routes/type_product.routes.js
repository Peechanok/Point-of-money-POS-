module.exports = app => {
    const type_product = require("../controllers/type_product.controller.js");
  
    var router = require("express").Router();
  
    
    // Retrieve a single Tutorial with id
    router.get("/:id", type_product.findData);

    // Create a new Tutorial
    router.post("/", type_product.create);
  
    // Retrieve all type_product
    //router.get("/all", type_product.findData);
  
    // Retrieve all published type_product
    router.get("/published", type_product.findAllPublished);
  
  
    // Update a Tutorial with id
    router.put("/:id", type_product.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", type_product.delete);
  
    // Delete all type_product
    router.delete("/", type_product.deleteAll);
  
    app.use('/api/type_product', router);
  };
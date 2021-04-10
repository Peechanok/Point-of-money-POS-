module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    
    // Retrieve a single Tutorial with id
    router.get("/:id", product.findData);

    // Create a new Tutorial
    router.post("/", product.create);
  
    // Retrieve all Tutorials
    //router.get("/all", tutorials.findData);
  
    // Retrieve all published Tutorials
    router.get("/published", product.findAllPublished);
  
  
    // Update a Tutorial with id
    router.put("/:id", product.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", product.delete);
  
    // Delete all Tutorials
    router.delete("/", product.deleteAll);
  
    app.use('/api/product', router);
  };
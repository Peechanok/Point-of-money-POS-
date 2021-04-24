module.exports = app => {
    const sales = require("../controllers/sales.controller.js");

    var router = require("express").Router();


    // Retrieve a single Tutorial with id
    router.get("/:id", sales.findData);

    // Create a new Tutorial
    router.post("/", sales.create);

    // Retrieve all type_product
    //router.get("/all", type_product.findData);

    // Retrieve all published type_product
    router.get("/published", sales.findAllPublished);


    // Update a Tutorial with id
    router.put("/:id", sales.update);

    // Delete a Tutorial with id
    router.delete("/:id", sales.delete);

    // Delete all type_product
    router.delete("/", sales.deleteAll);

    app.use('/api/sales', router);
}
const db = require("../models");
const Sales = db.sales;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Create a Tutorial
    //res.send(req.body);
    const sales = {
        sales: req.body.sales,
        user_id: req.body.user_id,


    };
    // Save Tutorial in the database
    Sales.create(sales)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Sales."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findData = (req, res) => {
    if (req.params && req.params.id) {
        if (req.params.id === 'all') {
            const title = req.query.title;
            var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

            Sales.findAll({ where: condition })
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Sales."
                    });
                });

        } else if (req.params.id > 0) {
            const id = req.params.id;

            Sales.findByPk(id)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Error retrieving Sales with id=" + id
                    });
                });
        }


    } else {
        res.json({ 'test': 'Not foud xxx' });
    }


};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    res.json({ 'xid': req.params.id });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    res.json({ 'test': 'update' });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    let salesId = req.params.id;


    Sales.destroy({
        where: { id: salesId }

    })

        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sales was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Sales with id=${id}. Maybe Sales was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Sales with id=" + id
            });
        });


};


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    res.json({ 'test': 'deleteAll' });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    res.json({ 'test': 'findAllPublished' });
};
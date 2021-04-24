module.exports = (sequelize, Sequelize) => {


    const Sales = sequelize.define("sales", {
        sales: {
            type: Sequelize.DOUBLE
        },
        user_id: {
            type: Sequelize.INTEGER,
        }

    });

    return Sales;
};
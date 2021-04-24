module.exports = (sequelize, Sequelize) => {


  const Product = sequelize.define("product", {
    product_name: {
      type: Sequelize.STRING
    },
    product_description: {
      type: Sequelize.STRING
    },
    product_price: {
      type: Sequelize.INTEGER
    },
    product_number: {
      type: Sequelize.INTEGER
    },
    product_picture: {
      type: Sequelize.STRING
    },
    type_product_id: {
      type: Sequelize.INTEGER,
      //references: 'type_product', // <<< Note, its table's name, not object name
      //referencesKey: 'id' // <<< Note, its a column name
    }

  });
  //Product.hasOne(Type_product, { foreignKey: 'type_product_id' });
  //Type_product.belongsTo(Product, { foreignKey: 'type_product_id' });



  return Product;
};
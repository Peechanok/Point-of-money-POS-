module.exports = (sequelize, Sequelize) => {


  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.INTEGER
    },
    fullname: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.INTEGER,
      //references: 'type_product', // <<< Note, its table's name, not object name
      //referencesKey: 'id' // <<< Note, its a column name
    },
    picture: {
      type: Sequelize.STRING
    }


  });
  //Product.hasOne(Type_product, { foreignKey: 'type_product_id' });
  //Type_product.belongsTo(Product, { foreignKey: 'type_product_id' });



  return User;
};
module.exports = {
    HOST: "pomoney-db.co08z1ygs8vo.us-east-1.rds.amazonaws.com",
    USER: "postgres",
    PASSWORD: "password123",
    DB: "point_of_sales",
    dialect: "postgres",
    operatorsAliases: false,
    timezone: '+07:00',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
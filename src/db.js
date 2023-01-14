import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize';
import employeesModel from './models/Employees.js'
import sectorsModel from './models/Sectors.js'

const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/CompanyDB`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const modelDefiners = [employeesModel, sectorsModel];

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Sectors, Employees } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Employees.belongsTo(Sectors, {foreignKey:"sectorId", as:"sector"});
Sectors.hasMany(Employees, {as: "employee"})

export default {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

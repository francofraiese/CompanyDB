import { DataTypes } from 'sequelize';
const {INTEGER, STRING} = DataTypes

export default (sequelize) => {
  sequelize.define('Employees', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: STRING,
      allowNull: false
    },
    lastName: {
      type: STRING,
      allowNull: false
    },
    email: {
      type: STRING,
      allowNull: false
    }
  });
};
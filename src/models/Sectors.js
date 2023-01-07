import { DataTypes } from 'sequelize'
const {INTEGER, STRING} = DataTypes

export default (sequelize) => {
  sequelize.define('Sectors', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING,
      allowNull: false
    }
  });
};
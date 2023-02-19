'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inspection.init({
    name: {
      tpye: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      tpye: DataTypes.STRING,
      allowNull: false,
    },
    lift: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hours: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tires: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    horn: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    battery: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    controls: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    brakes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    steering: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hydraulics: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    overhead_guard: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    charger: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    fall_arrest: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_load_plate_displayed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_operators_manual_present: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_forklift_clean: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    deficiencies_present: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Inspection',
    tableName: 'inspections',
    timestamps: true
  });
  return Inspection;
};
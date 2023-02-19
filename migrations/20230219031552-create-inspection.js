'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inspections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      date: {
        type: Sequelize.STRING,
        required: true
      },
      lift: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      hours: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      tires: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      horn: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      battery: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      controls: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      brakes: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      steering: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      hydraulics: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      overhead_guard: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      charger: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      fall_arrest: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_load_plate_displayed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_operators_manual_present: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_forklift_clean: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      deficiencies_present: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inspections');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('inspections', [{
      name: "Test v2",
      date: "1675382400000",
      lift: true,
      hours: "3500",
      tires: true,
      horn: true,
      battery: true,
      controls: true,
      brakes: true,
      steering: true,
      hydraulics: true,
      overhead_guard: true,
      charger: true,
      fall_arrest: true,
      is_load_plate_displayed: true,
      is_operators_manual_present: true,
      is_forklift_clean: true,
      deficiencies_present: "uh oh, forklift has been destroyed"
    },{
      name: "Test v2",
      date: "1675382400000",
      lift: true,
      hours: "3500",
      tires: true,
      horn: true,
      battery: true,
      controls: true,
      brakes: true,
      steering: true,
      hydraulics: true,
      overhead_guard: true,
      charger: true,
      fall_arrest: true,
      is_load_plate_displayed: true,
      is_operators_manual_present: true,
      is_forklift_clean: true,
      deficiencies_present: "uh oh, forklift has been destroyed"
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('inspections', null, {});
  }
};

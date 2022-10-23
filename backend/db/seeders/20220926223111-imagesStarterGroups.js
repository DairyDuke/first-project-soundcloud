'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //writing out bulk data in a variable for easy reference.

    // NTS - actually put a URL here
    const bulkData = [
      //Group 1 has 2 images
      {
        groupId: 1,
        url: "/images/defaultGroup.jpg",
        preview: true
      },
      {
        groupId: 1,
        url: "/images/defaultGroupClean.jpeg",
        preview: false
      },
      //Group 2 has 2 images
      {
        groupId: 2,
        url: "/images/datingGroup.png",
        preview: true
      },
      {
        groupId: 2,
        url: "/images/aquaGroup.jpeg",
        preview: false
      },
      //Group 3 has 1 image
      {
        groupId: 3,
        url: "/images/meetGroup.png",
        preview: true
      },
      //Group 4 has 1 image
      {
        groupId: 4,
        url: "/images/hammerGroup.png",
        preview: true
      },
      //Group 3 has 1 image
      {
        groupId: 5,
        url: "/images/defaultGroup.jpg",
        preview: true
      },
      {
        groupId: 5,
        url: "/images/defaultGroupClean.jpeg",
        preview: false
      },
      {
        groupId: 5,
        url: "/images/hammerGroup.png",
        preview: false
      },
    ]
    return queryInterface.bulkInsert('GroupImages', bulkData, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {

    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('GroupImages', {

      // what to use to delete the above.
      groupId: { [Op.in]: [1, 2, 3, 4, 5] }
    }, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

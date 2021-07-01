'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Arwen',
        password: "2901",
        name:'Arwen Undomiel',
        email: "arwen@jrr.com",
        img: 'https://www.giantbomb.com/a/uploads/scale_medium/14/141402/2380574-arwen_und_miel_arwen_undomiel_7666374_798_970_2_.jpg',
      },
      {
      username: 'Aragorn',
      password: "87",
      name:'Aragorn II Elessar',
      email: "aragorn@jrr.com",
      img: 'https://pbs.twimg.com/media/D2fMw0QX4AA4LHI.jpg',
      }    
  ], {})
},

  down: async (queryInterface, Sequelize) => {
  }
};

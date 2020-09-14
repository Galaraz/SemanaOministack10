
const Dev = require('../models/Dev');
const parseStringAsArry = require('../Utils/parseStringAsArray');

module.exports = {

  async index(request, response) {

    const { latitude, longitude, techs } = request.query;
    // fazer a busca dos Devs num raio de 10km 
    //filtrar por tecnologias 


    const techsArray = parseStringAsArry(techs);


    const devs = await Dev.find({

      techs: {
        $in: techsArray,

      },

      location: {

        $near: {

          $geometry: {
            type: 'Point',
            coodinates: [longitude, latitude],

          },
          $maxDistance: 10000,
        },

      },

    });

    return response.json({ devs });


  }


}
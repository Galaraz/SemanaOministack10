const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArry = require('../Utils/parseStringAsArray');

//index- (mostra lista), show- (unico), store- (criar), update- (alterar), destroe- (deletar)

module.exports = {

  async index(request,response){
      const devs = await Dev.find();

      return response.json(devs);
  },

  async store(request, response) {

    const { github_username, techs, latitude, longitude } = request.body;


    let dev = await Dev.findOne({ github_username });



    if (!dev) {


      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);



      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArry = parseStringAsArry(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };


      const dev = await Dev.create({

        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArry,
        location,

      })
    }
    
    return response.json(dev);

  }


};
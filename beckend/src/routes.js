const { Router } = require('express');
const axios = require ('axios');
const routes = Router();
const Dev = require('./models/Dev');
routes.post('/devs', async (request, response, next) => {
  try{
    const { github_username, techs } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    const {name = login, avatar_url, bio } = apiResponse.data;
    const techsArray = techs.split(',').map(tech => tech.trim());
    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
    })

    console.log(name, avatar_url, bio, github_username);
  
    return response.json(dev);
  } catch (err) {
    next(err);
  }
  
});

module.exports = routes;
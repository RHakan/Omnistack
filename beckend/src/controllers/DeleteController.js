const Dev = require('../models/Dev');
const express = require('express');
const app = express();

module.exports = {
    async index(request, response, next){
        try {
            const github_username = request.params;
            const devs = await Dev.deleteOne(github_username);

            return response.json(devs); 
        }catch (err) {
          next(err);
        }
    },
}
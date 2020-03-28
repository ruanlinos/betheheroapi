const express = require('express');
const routes = express.Router();

routes.post('/ongs', (request, response) => {
  const data = request.body;
  
  console.log(data);
  
  return res.json({
    message: "Hello World",
    id: params
  });

});

module.exports = routes;
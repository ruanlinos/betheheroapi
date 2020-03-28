const express = require('express');
const routes = express.Router();

routes.get("/users/:id", (req, res) => {
  const params = req.query;
  return res.json({
    message: "Hello World",
    id: params
  });
});

module.exports = routes;
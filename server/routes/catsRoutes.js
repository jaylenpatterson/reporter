const router = require('express').Router();

module.exports = () => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const cats = ['Rosey', 'Puma', 'Mr Buttons', 'Aya'];
    res.json(cats);
  });
  
  return router;
}
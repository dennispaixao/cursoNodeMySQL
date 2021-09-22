const { Router} = require('express');

const routes = new Router();

routes.get('/test',  (req, res)=> {
    return res.json({ message:'OK!' });

});


module.exports = routes;
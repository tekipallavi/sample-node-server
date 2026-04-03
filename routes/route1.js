const express = require('express');
const router = express.Router();

const { getDetails, setDetails} = require( "../controllers/controller1.js");

router.get('/getDetails', getDetails);

router.post('/setDetails', setDetails);

module.exports =  router;
const express = require('express');
const {create, destroy, getAll, get, update}= require('../../controllers/city-controller')
// const citycontroller = require('../../controllers/city-controller')

const router = express.Router();

// we can also use router as :  router.post('/city', citycontroller.create)

router.post('/city', create);
router.get('/city/:id', get);
router.get('/city',getAll)
router.patch('/city/:id', update);
router.delete('/city/:id', destroy);

module.exports = router;
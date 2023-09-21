const express = require('express');
const { create, get,getAll, update, destroy } = require('../../controllers/city-controller');
const router = express.Router();


router.post('/city', create);
router.get('/city/:id', get);
router.get('/city',getAll)
router.patch('/city/:id', update);
router.delete('/city/:id', destroy);

module.exports = router;




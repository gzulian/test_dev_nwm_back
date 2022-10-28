'use strict';

const   express     = require('express'),
        router      = express.Router(),
        users       = require('../domain/services/service-user');

//router.post('/login/', users.Login);
router.get('/authToken/', users.AuthenticateToken);
router.get('/users/:id', users.GetById);
router.post('/users/', users.Store);
router.patch('/users/transfers/:id', users.UpdateTransfersById);
router.patch('/users/addressees/:id', users.UpdateAddresseesById);

module.exports = router;
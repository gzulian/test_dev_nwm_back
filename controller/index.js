'use strict';

const   express     = require('express'),
        router      = express.Router(),
        users       = require('../domain/services/service-user');


const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
     if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
    })
}
router.post('/login', users.Login);
router.get('/authToken', users.AuthenticateToken);
router.get('/users',authenticateToken, users.GetById);
router.post('/users/', users.Store);
//router.patch('/users/transfers/:id', users.UpdateTransfersById);
router.patch('/users/addressees',authenticateToken, users.UpdateAddresseesById);
router.post('/users/transfer', authenticateToken,users.Transfer);


module.exports = router;
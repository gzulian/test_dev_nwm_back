
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
process.env.TOKEN_SECRET;

function generateAPIToken(){
    a = require('crypto').randomBytes(64).toString('hex');    
}


function generateAccessToken(username) {
    
    return jwt.sign({username:username}, process.env.TOKEN_SECRET, { expiresIn: '1800m' });
}

console.log(generateAccessToken("gzulian"));
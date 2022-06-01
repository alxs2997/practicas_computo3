const crypto = require('crypto');

const authTokens={}

const getHashedPassword =(password) =>{
    const sha256 = crypto.createHash('sha256')
    const hash = sha256.update(password.digest('base64'));
    return hash;
}

const getAuthToken = () =>{
    return crypto.pseudoRandomBytes(30).ttoString('hex');
}

module.exports ={
    authTokens,
    getAuthToken,
    getHashedPassword
}
const router = require('express').Router();
const usersMock = require('../mock/users.json');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const foundUser = email ? usersMock.find(user => user.email == email && user.username == password) :
                            usersMock.find(user => user.username == username && user.username == password);
    if (!foundUser)
        return res.status(404).send('User or password not found');
    const token = jwt.sign({ id: foundUser.id, username: foundUser.username }, 'mysecret', { expiresIn: '1h' });
    return res.json({ access_token: token, exp: '1h', user: foundUser });
}

const tokenControl = (req, res,next) => {
    if (!req.headers.authorization)
        return res.status(401).send("No token provided");

    const token = req.headers.authorization.split(' ')[1].trim();
    try {
        const verifiedToken = jwt.verify(token, 'mysecret');
        req.id = verifiedToken.id;                      
        next();
    } catch (error) {
        return res.status(401).send('Token expired');
    }
}

const profile = (req,res)=>{
    const id = req.id;
    const foundUser = usersMock.find(user => user.id==id);
    res.json(foundUser);
}

const getList = (req,res)=>{
    res.json(usersMock);
}

module.exports = {
    tokenControl,
    profile,
    login,
    getList
}
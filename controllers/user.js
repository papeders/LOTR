const User = require('../models').User
const Quote = require('../models').Quote

const constants = require('../constants')

const createUser = (req, res) => {    
    User.findOne({
        where: {username: req.body.username}
    }).then( resp => {

        if(resp === null){

            const thisUser = {
                username: req.body.username,
                password: req.body.password,
                name:req.body.name,
                email: req.body.email,
                img: req.body.img
            }

            User.create(thisUser).then(newUser => {
                res.status(constants.SUCCESS).json(newUser)
            })
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username is already in use.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

const loadUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        res.status(constants.SUCCESS).json(resp)
    })
}

const loginUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {

        if (resp != null) {
            req.body.password === resp.password ?
                res.status(constants.SUCCESS).json(resp)
                :
                res.status(constants.FORBIDDEN).send(`Password Incorrect.`)
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

const updateUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {

        if(resp != null) {
            const updatedUser = { 
                username: req.body.username,
                password: req.body.password,
                name:req.body.name,
                email: req.body.email,
                img: req.body.img
            }

            User.update(updatedUser, {where: {id:resp.id}, returning: true})
                .then(resp => {
                    res.status(constants.SUCCESS).json(resp)
                })
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

const deleteUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {

        if (resp != null){
            User.destroy({where: {id:resp.id}})
                .then(resp => {
                    res.status(constants.SUCCESS).send('User deleted.')
                })
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    loadUser
}
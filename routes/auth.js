const router = require('express').Router

const authControllers = require('../controllers/auth')

module.exports = (db) => {
    router.post('./register', authControllers.register())
    router.post('./login', authControllers.login())
    router.post('./logout', authControllers.logout())

    return router
}
const express = require('express')
const routes = express.Router()
const register = require('./controller/email.controller').register
const middleLeads = require('./middleware/leads.middleware').fieldsValidator


routes.
    post('/register-lead/', middleLeads, register)



module.exports = routes
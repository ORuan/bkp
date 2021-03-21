const validator = require('validator')


exports.fieldsValidator = (req, res, next) => {
    const { name, email } = req.body;
    if (!validator.isLength(name, { min: 4, max: 100 })) {
        throw Error('Erro na validação, no campo name')
    }
    if (!validator.isEmail(email)) {
        throw Error("Erro na validação, no campo email")
    }
    next()
}

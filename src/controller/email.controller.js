const LeadModel = require('../database/schema/leadSchema')

exports.register = async (req, res) => {

    const { name, email } = req.body
    const lead = new LeadModel({ name, email })
    await lead.save(function(err){
        if (err){
            return res.send(err)
        }else{
            return res.send('Saved')
        }
    })
}
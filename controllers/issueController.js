const Issue = require('../models/Issue');

exports.createIssue = async (req, res) => {
    try {
        const issue = new Issue(req.body);
        await issue.save();
        res.status(201).send({issue});
    } catch (error) {
        res.status(400).send(error);
    }
}
const express= require('express');
const router = express.Router();
const issueController = require( '../controllers/issueController') ;

router.post('/issues', issueController.createIssue);

module.exports = router;
const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const project = require('../controllers/projectController');
const comment = require('../controllers/commentController');
const checkJwt = require('../middlewares/jwt');
const checkPermissions = checkJwt.checkPermissions;

router.post('/createUser', user.createUser);
router.post('/userLogIn', user.logIn);

router.post('/addProject', checkPermissions, project.addProject);
router.get('/getAllProjects', checkPermissions, project.getAllProjects);

router.post('/addCommentToProject', checkPermissions, comment.addCommentToProject);
router.get('/getCommentByProjectId/:ProjectId', checkPermissions, comment.getCommentByProjectId);

module.exports = router;
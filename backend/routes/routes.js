const express = require('express');
const sampleController = require('../controllers/sample.controller');
const userController = require('../controllers/user.controller');
const task = require('../controllers/task.controller');
const group = require('../controllers/group.controller');
const role = require('../controllers/role.controller');

module.exports = (function () {
  var router = express.Router();


  router.get('/getRoles' , role.getAllRoles);
  router.get('/getOneRole', role.getOneRole);
  router.post('/addRole',role.addRole);
  router.patch('/updateRole', role.updateRole);
  router.delete('/deleteRole', role.deleteRole);
//   router.get('/', sampleController.index);
//   router.get('/home', sampleController.home);
//   router.post('/login', userController.verifyUser);
  router.get('/users', userController.getUsers);
  router.get('/getSingleUser/:id', userController.getOneUser);
  router.post('/registerUser', userController.registerUser);
  router.post('/login', userController.login);



  // tasks 
  router.get('/tasks', task.getUserTasks);
router.get('/tasks/:id', task.getTask);
router.post('/tasks', task.addTask);
router.patch('/tasks/:id', task.updateTask);
router.delete('/tasks/:id', task.deleteTask);


//groups

router.get('/groups', group.getGroups);
router.get('/groups/:groupId', group.getGroup);
router.post('/groups', group.createGroup);
router.patch('/groups/:groupId', group.updateGroup);
router.delete('/groups/:groupId', group.deleteGroup);
router.get('/groupsUsers', group.getGroupUsers);


  return router;

})();


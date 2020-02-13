const Project = require('../models/project.model');

exports.getAllProjects = [
  function (req, res, next) {
    Project.find({
    }).then((projects) => {
      res.send({
        projects
      });
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.getProject = [
  function (req, res, next) {
    const id = req.params.id;

    Project.findOne({
      _id: id
    }).then((project) => {
      if (!project) {
        return res.status(404).send();
      }
      res.send({
        project
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.deleteProject = [
  function (req, res, next) {
    const id = req.params.id;

    Project.findOneAndRemove({
      _id: id,
    }).then((project) => {
      if (!project) {
        return res.status(404).send();
      }
      res.send({
        project
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.addProject = [
  function (req, res, next) {
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      completed: false
    });

    project.save().then((newProject) => {
      res.send(newProject);
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.updateProject = [
  function (req, res, next) {
    const id = req.params.id;

    Project.findOne({
      _id: id,
    }).then((project) => {
      if(!project) {
        return res.status(404).send();
      }
      
      project.name = req.body.name;
      project.description = req.body.description;
      project.completed = req.body.completed;

      project.save().then((updatedProject) => {
        res.send(updatedProject);
      }, e => {
        res.status(400).send(e);
      });
    });
  }
];
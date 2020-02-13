const Role  = require('../models/role.model');


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
exports.getAllRoles = [
    function(req,res, next){
        Role.find({}).then((roles) =>{
            res.send({
                roles
            },
            e => {
                res.status(400).send(e);
            });
        })
    }
]
exports.getOneRole = [ function(req, res , next) {
    Role.findOne({
        _id : req.params.id
    }).then(role =>{
        res.send({
            role
        });
    }, e => {
        res.status(404).send(e);
    })
}]

exports.addRole = [
    function(req, res ,next){
        const role = new Role( {
            name  : req.body.name,
            permissions : req.body.permsiions
        })

        role.save().then(newRole =>{
            res.send({
              newRole
            }, e => res.status(400).send(body))
        })
    }
]
exports.deleteRole = [
    function(req,res , next){
        const id = req.params.id;

        Role.findOneAndRemove({
          _id: id,
        }).then((role) => {
          if (!role) {
            return res.status(404).send();
          }
          res.send({
            role
          });
    
        }).catch(e => {
          res.status(400).send();
        });
      }
]

exports.updateRole = [

        function (req, res, next) {
            const id = req.params.id;
        
            Role.findOne({
              _id: id,
            }).then((role) => {
              if(!role) {
                return res.status(404).send();
              }
              
              role.name = req.body.name;
              role.permissions = req.body.description;
        
              role.save().then((updatedTask) => {
                res.send(updatedTask);
              }, e => {
                res.status(400).send(e);
              });
            });
          }
    
]
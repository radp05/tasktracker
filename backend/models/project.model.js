var mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    projectId: {type: String},
    projectName: { type: String },
    projectDescription:{type:String},
   
  },{timestamps: true});
     
var Project = mongoose.model("projects", projectSchema);
module.exports = Order

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolesSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  permissions: [String],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model('role', rolesSchema);


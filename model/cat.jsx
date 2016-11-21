const mongoose     = require('mongoose');
const  Schema       = mongoose.Schema;

const CatSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Cat', CatSchema);
// Creation of the model Cat linked to the collection "cats"
// This Cat model is the entry points to the collection "cats"

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// We define the schema of a cat. It can only have 3 properties: name, color and age
const catSchema = new Schema({
  name: { type: String, required: true },
  color: {
    type: String,
    // set: text => text.toUpperCase()
  },
  age: { type: Number, default: 0 }
});

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;

// To reuse Cat in a different file:s
// const Cat = require('./models/Cat')

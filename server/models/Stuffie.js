const mongoose = require('mongoose');

const stuffiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  color: {
    type: String,
    required: 'This field is required.'
  },
  description: {
      type: String,
      required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Care Bear', 'Animal', 'Toy', 'Teddy Bear', 'Food', 'Doll', 'Beanie Baby', 'Crochet', 'Pokemon', 'Other'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
});

stuffiesSchema.index({ name: 'text', description: 'text'});
// WildCard Indexing
// stuffiesSchema.index({ '$'})

module.exports = mongoose.model('Stuffies', stuffiesSchema);
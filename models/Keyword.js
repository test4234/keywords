const mongoose = require('mongoose');

// Define schema for keywords_items collection
const keywordSchema = new mongoose.Schema(
  {
    keyword: { type: String, required: true },
    language: { type: String }
  },
  { collection: 'keywords_items' } // Explicitly set the collection name
);

// Export model
module.exports = mongoose.model('Keyword', keywordSchema);

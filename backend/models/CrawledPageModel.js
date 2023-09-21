import mongoose, { Schema } from 'mongoose';

const crawledPageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  h1: {
    type: String,
    required: false
  },
  h2: {
    type: String,
    required: false
  },
  links: {
    type: [String],
    default: []
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('CrawledPage', crawledPageSchema);

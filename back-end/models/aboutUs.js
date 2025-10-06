const mongoose = require('mongoose')
const Schema = mongoose.Schema
const aboutUsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    paragraphs: [{
      type: String,
      required: true,
    }],
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const AboutUs = mongoose.model('AboutUs', aboutUsSchema)
module.exports = {
  AboutUs,
}

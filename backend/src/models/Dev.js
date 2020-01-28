const mongoose = require("mongoose")
const PointSchema = require("./utils/PointSchema")

const DevSchema = new mongoose.Schema({
  name: String,
  githubUsername: String,
  bio: String,
  avatarUrl: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphere"
  }
})

// The string defines how the schema above will be called in the database
module.exports = mongoose.model("Dev", DevSchema)
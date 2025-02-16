const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_HOST);
const todoSchema = new mongoose.Schema({
  blogContent: { type: String },
});
const Blog = mongoose.model("blog", todoSchema);
module.exports = {
  Blog,
};

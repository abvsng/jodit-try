const express = require("express");
const app = express();
const cors = require("cors");
const { Blog } = require("./db/mongoose");
const port = 3000;
app.use(express.json(), cors());
app.post("/send", async (req, res) => {
  const { blogContent } = req.body;
  const newBlog = new Blog({ blogContent: blogContent });
  await newBlog.save();
  res.send("Data Sent");
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/submission", require("./routes/submission"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

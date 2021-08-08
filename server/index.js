const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});
app.get("/api", (req, res) => {
  res.json({ message: "Response From Backend on intervals!" });
});
app.post("/dynamicinput", (req, res) => {
  res.json({ sentData: req.body });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

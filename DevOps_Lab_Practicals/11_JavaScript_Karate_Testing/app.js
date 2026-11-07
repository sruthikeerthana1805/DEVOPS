const express = require("express");
const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from JavaScript" });
});

app.post("/add", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: "a and b must be numbers" });
  }
  res.json({ result: a + b });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));

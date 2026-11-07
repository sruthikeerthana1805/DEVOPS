const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/register", (req, res) => {
  const { name, email, phone, ticketType, notes } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields."
    });
  }
  console.log("New Registration:", { name, email, phone, ticketType, notes });
  res.json({ success: true, message: "Registration successful!" });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Event Management System API is running 🚀");
});

// Sample events route
app.get("/events", (req, res) => {
  res.json([
    { id: 1, title: "Workshop", date: "2026-01-01" },
    { id: 2, title: "Competition", date: "2026-02-01" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

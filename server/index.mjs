import express from "express";

// Define port
const port = process.env.PORT || 3001;

// Initialize express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

import express from "express";
import dotenv from "dotenv";
import { createConnection } from "./db/db.mjs";

// import routes
import mainRouter from "./router/mainRouter.mjs";

dotenv.config();

// use routes
app.use("/api/1/user", mainRouter);

// Define port
const port = process.env.PORT || 3001;

// Initialize express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const start = async () => {
  try {
    createConnection();
    console.log("connected to db...");
    app.listen(port, () => {
      console.log(`server is running on port ${port}...`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

start();

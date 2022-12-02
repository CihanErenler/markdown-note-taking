import mongoose from "mongoose";
import Data from "./Data.mjs";
const { Schema } = mongoose;

const User = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  data: { type: Data, required: false },
});

export default mongoose.Modal("User", User);

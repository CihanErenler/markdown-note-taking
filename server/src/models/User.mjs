import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  data: String,
});

export default mongoose.Modal("User", User);

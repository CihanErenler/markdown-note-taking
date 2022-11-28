import mongoose from "mongoose";
const { Schema } = mongoose;

const Data = new Schema({
  code: {
    type: String,
    required: false,
  },
  isModalOpen: {
    type: Boolean,
    default: false,
  },
  toBeDeleted: {
    type: String,
    default: null,
  },
  fullscreen: String,
  modalMode: String,
  newFolderName: String,
  parent: String,
  modalValue: String,
  currentlyOpenFile: String,
  currentlySelectedTag: String,
  tagInput: String,
  totalAmount: Number,
  tags: [Tag],
  files: {
    id: String,
    name: String,
    isOpen: { type: Boolean, default: false },
    items: [Folder],
  },
});

const Folder = new Schema({
  id: String,
  name: String,
  isOpen: { type: String, default: Boolean },
  isSelected: {
    type: String,
    default: false,
  },
  items: [File],
});

const File = new Schema({
  id: String,
  name: { type: String, required: true },
  isSelected: { type: Boolean, default: false },
  tags: [String],
});

const Tag = new Shema({
  selected: { type: Boolean, default: false },
  name: String,
  color: String,
});

export default mongoose.Model("Data", Data);

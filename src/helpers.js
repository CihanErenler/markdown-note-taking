const toggleFolder = (array, id) => {
  array.forEach((item) => {
    if (item.isFolder) {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
      } else {
        toggleFolder(item.items, id);
      }
    }
  });
};

const addToParent = (array, id, newFile) => {
  array.forEach((item) => {
    if (item.isFolder) {
      if (item.id === id) {
        item.items.unshift(newFile);
        item.isOpen = true;
      } else {
        addToParent(item.items, id, newFile);
      }
    }
  });
};

const selectFile = (array, id) => {
  array.forEach((item) => {
    if (item.id === id) {
      item.isSelected = true;
    } else {
      if (item.isFolder) selectFile(item.items, id);
    }
  });
};

const unselectAll = (array) => {
  array.forEach((item) => {
    if (item.isFolder) unselectAll(item.items);
    else item.isSelected = false;
  });
};

const renameItem = (array, id, newName) => {
  array.forEach((item) => {
    if (item.id === id) {
      item.name = newName;
    } else {
      if (item.isFolder) renameItem(item.items, id, newName);
    }
  });
};

const deleteItem = (array, id) => {
  array.forEach((item, index) => {
    if (item.id === id) {
      if (index > 0 && item.isSelected) array[index - 1].isSelected = true;
      else if (array.length > 1 && item.isSelected)
        array[index + 1].isSelected = true;
      array.splice(index, 1);
    } else {
      if (item.isFolder) deleteItem(item.items, id);
    }
  });
};

export {
  toggleFolder,
  addToParent,
  renameItem,
  deleteItem,
  selectFile,
  unselectAll,
};

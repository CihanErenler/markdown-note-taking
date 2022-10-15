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

const renameItem = (array, id, newName) => {
  array.forEach((item) => {
    if (item.id === id) {
      item.name = newName;
    } else {
      if (item.isFolder) renameItem(item.items, id, newName);
    }
  });
};

export { toggleFolder, addToParent, renameItem };

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

export { toggleFolder, addToParent };

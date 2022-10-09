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

const addFolder = (array, id, newFolder) => {
	array.forEach((item) => {
		if (item.isFolder) {
			if (item.id === id) {
				item.items.unshift(newFolder);
				item.isOpen = true;
			} else {
				addFolder(item.items, id, newFolder);
			}
		}
	});
};

export { toggleFolder, addFolder };

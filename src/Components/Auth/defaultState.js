import { v4 as uuidv4 } from "uuid";

export const defaultState = {
	totalAmount: 1,
	files: {
		id: "1",
		name: "Folders",
		items: {
			id: uuidv4(),
			name: "New Folder",
			items: [
				{
					id: uuidv4(),
					name: "New File",
					tags: [],
				},
			],
		},
	},
	tags: [
		{ id: "1", name: "Blue", color: "#2676ff" },
		{ id: "2", name: "Green", color: "green" },
		{ id: "3", name: "Grey", color: "grey" },
		{ id: "4", name: "Important", color: "red" },
		{ id: "5", name: "Orange", color: "orange" },
		{ id: "6", name: "Purple", color: "purple" },
		{ id: "7", name: "Work", color: "yellow" },
		{ id: "8", name: "Development", color: "dodgerblue" },
	],
};

export const defaultCode = {
	code: "",
	tags: [],
};

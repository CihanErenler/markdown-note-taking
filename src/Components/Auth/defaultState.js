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
		{ name: "Blue", color: "#2676ff" },
		{ name: "Green", color: "green" },
		{ name: "Grey", color: "grey" },
		{ name: "Important", color: "red" },
		{ name: "Orange", color: "orange" },
		{ name: "Purple", color: "purple" },
		{ name: "Work", color: "yellow" },
		{ name: "Development", color: "dodgerblue" },
	],
};

export const defaultCode = {
	code: "",
	tags: [],
};

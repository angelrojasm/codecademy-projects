//DOM Element Constants

const taskList = document.getElementById('task-list');
const inputText = document.getElementById('task');
const addBtn = document.getElementById('task-button');

//Functions

const createTableEntry = () => {
	let listEntry = document.createElement('div');
	let icons = document.createElement('div');
	let listText = document.createElement('p');
	let listCheckIcon = document.createElement('i');
	let listTrashIcon = document.createElement('i');

	listEntry.appendChild(listText);
	icons.appendChild(listCheckIcon);
	icons.appendChild(listTrashIcon);
	listEntry.appendChild(icons);

	icons.className = 'icons';
	listEntry.className = 'list-entry';
	listText.className = 'entry-text';
	listCheckIcon.className = 'fa fa-check';
	listTrashIcon.className = 'fa fa-trash';

	listText.innerHTML = inputText.value;
	inputText.value = '';
	taskList.insertBefore(listEntry, taskList.firstChild);

	listCheckIcon.onclick = () => {
		listText.style.textDecoration = 'line-through';
	};
	listTrashIcon.onclick = () => {
		taskList.removeChild(listEntry);
	};
};

inputText.onfocus = () => {
	inputText.placeholder = '';
};

addBtn.onclick = createTableEntry;

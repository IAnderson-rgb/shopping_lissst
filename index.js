// Make it extensible!!
var button = document.getElementById('enter');
var delButton = document.getElementsByClassName('delete');
var closeButton = document.getElementById('close');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var list_items = document.querySelectorAll('#list_item > li');
var show = true;
var itemsToDel;
var updated_items;

function inputLength() {
	return input.value.length;
}

function toggleItem() {
	this.classList.toggle('done');
}

function toggleModal() {
	// This will toggle the modal and overlay.
	if (show === true) {
		show = false;
		var delSectionClass = document.querySelector('#toggleModal');
		var delDivClass = document.querySelector('#toggleOverlay');
		delSectionClass.classList.remove('hidden');
		delDivClass.classList.remove('hidden');
	} else {
		show = false;
		var delSectionClass = document.querySelector('#toggleModal');
		var delDivClass = document.querySelector('#toggleOverlay');
		delSectionClass.classList.add('hidden');
		delDivClass.classList.add('hidden');
	}
}

function creatListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';

	var delBtn = document.createElement('button');
	delBtn.appendChild(document.createTextNode('Delete Item'));
	delBtn.className = 'delete';
	li.append(delBtn);

	updated_items = document.querySelectorAll('#list_item > li');
	itemsToDel = document.querySelectorAll('#list_item > li > button');

	list_items = updated_items;
	delButton = itemsToDel;

	//Listens for the click event on new items.
	for (var i = 0; i < list_items.length; i++) {
		list_items[i].addEventListener('click', toggleItem);
	}

	for (var i = 0; i < delButton.length; i++) {
		delButton[i].addEventListener('click', delItem);
	}
}

function checkEpmty() {
	var isEmpty = delButton 
	if (isEmpty.length === 0) {
		show = true;
		toggleModal();
	} 
}

function delItem(evt) {
	evt.target.removeEventListener('click', delItem, false);
	evt.target.parentNode.remove();
	if (delButton.length === 0) {
		checkEpmty();
}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		creatListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === 'Enter') {
		creatListElement();
	}
}

function closeModalAndHide() {
	toggleModal();
	document.location.reload();
}

for (var i = 0; i < delButton.length; i++) {
	delButton[i].addEventListener('click', delItem, false);
}

//Listens for the click event on any existing items.
for (var i = 0; i < list_items.length; i++) {
	list_items[i].addEventListener('click', toggleItem);
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

closeButton.addEventListener('click', closeModalAndHide);
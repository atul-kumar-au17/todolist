//Adds text to todo list - if not empty
document.getElementById("new").addEventListener("click", function(){
	var task = document.getElementById("text").value;
	if (task) {
		addNewTask(task);
		document.getElementById("text").value="";
	}
});

function removeItem(){
	var item = this.parentNode.parentNode; //targeting li
	var parent = item.parentNode; //targeting ul

	parent.removeChild(item);
}

function completeItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var parentId = parent.id;
	
	//to be able to change between completed and uncomplete items both ways
	var target = (parentId === "todo") ? document.getElementById("ready"):document.getElementById("todo");

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

//Adds new item to todo list
function addNewTask(item){
	var list = document.getElementById("todo");

	var newItem = document.createElement("li");
	newItem.innerText = item;

	var buttons = document.createElement("div");
	buttons.classList.add("buttons");

	//creates remove and complete buttons + add classes
	var remove = document.createElement("button");
	remove.classList.add("remove");
	remove.addEventListener("click", removeItem);

	var complete = document.createElement("button");
	complete.classList.add("complete");
  complete.addEventListener("click", completeItem);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	newItem.appendChild(buttons);

	//insert new todo before the first element
	list.insertBefore(newItem, list.childNodes[0]);
}

//add event listener to pre-made list items

var deleteIt = document.getElementsByClassName("remove");
for (var i = 0; i < deleteIt.length; i++){
	deleteIt[i].addEventListener("click", removeItem);
}

var changeIt = document.getElementsByClassName("complete");
for (var i = 0; i < changeIt.length; i++){
	changeIt[i].addEventListener("click", completeItem);
}
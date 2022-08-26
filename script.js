addListeners(getElements());
// adds event listeners to every <li> and its child <input> so that it can be clicked on and edited. It gathers every element from the getElements() function.

function getElements(){
    let checklist = document.getElementById("checklist");
    // checklist is the whole <ul> container with the id ("checklist")
    let items = checklist.querySelectorAll("li");
    // items is a list of all the <li> elements
    let inputs = checklist.querySelectorAll("input");
    // inputs is a list of all the input elements
    return [checklist,items,inputs];
    // returns the checklist,items and inputs in a list
}

function addListeners(list){
    let checklist = list[0];
    let items = list[1];
    let inputs = list[2];
    for (let i = 0; i< items.length;i++){
        items[i].addEventListener("click", editItem);
        // Each item listens for a click and if it is clicked, the editItem function is run

        inputs[i].addEventListener("dblclick", deleteFromList);
        // Deletes item if a specified input is double clicked
        
        inputs[i].addEventListener("keypress", itemKeypress);
        // Each input listens for any keypress

        inputs[i].addEventListener("blur", updateItem);
        // Each input listens to for any clicks outside of the element
    }
}

function editItem(){
    let items = checklist.querySelectorAll("li");
    for (let i = 0; i<items.length;i++){
        items[i].className = "";
    }
    // Removes the edit class list from all items so that only one item on the list can be selected at a time
    this.className = "edit";
    // the <li> that was clicked is given the edit class
    let input = this.querySelector("input");
    // input is assigned the element input which was clicked
    input.focus();
    // focuses on the element
    input.setSelectionRange(0, input.value.length);
    // selects the whole text within the edit element
}

function updateItem(){
    if (this.value === "Enter text here:"){
        this.previousElementSibling.innerHTML = "";
        // if the text isn't changed then the span element will be empty
    }else{
        this.previousElementSibling.innerHTML = this.value;
        // the sibling <span> elements value is changed to the edit's value.
    }
    this.parentNode.className = "";
    // the parent <li> no longer has a class
}

function itemKeypress(event){
    if (event.which === 13){
        // checks if the keypressed is enter (13)
        updateItem.call(this);
        // passes the element you are on from keypress to updateItem
    }else{
        return;
    }
}

function addToList(){
    const newItem = document.createElement('li');
    checklist.append(newItem);
    const span = document.createElement('span');
    newItem.append(span);
    const input = document.createElement('input');
    input.value = "Enter text here:";
    newItem.append(input);
    // creates a new <li> element which has the children: <input> and <span>. This <li> element becomes the child of the parent element: <ul id="checklist">
    addListeners(getElements())
    // Runs the addListeners function to add listeners to the new <li> and its <input>.
}

function deleteFromList(){
    this.parentNode.remove()
    // Removes the parent element which is the list element
} 


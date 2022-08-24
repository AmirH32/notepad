 let checklist = document.getElementById("checklist");
// checklist is the whole <ul> container with the id ("checklist")
let items = checklist.querySelectorAll("li");
// items is a list of all the <li> elements
let inputs = checklist.querySelectorAll("input");
// inputs is a list of all the input elements

for (let i = 0; i< items.length;i++){
    items[i].addEventListener("click", editItem);
    // Each item listens for a click and if it is clicked, the editItem function is run
    inputs[i].addEventListener("blur", updateItem)
    // Each input listens for a blur and if so it runs the updateItem function
    inputs[i].addEventListener("keypress", itemKeypress)
    // Each input listens for any keypress
}

function editItem(){
    this.className = "edit"
    // the <li> that was clicked is given the edit class
    var input = this.querySelector("input");
    // input is assigned the element input which was clicked
    input.focus();
    // focuses on the element
    input.setSelectionRange(0, input.value.length);
    // selects the whole text within the edit element
}
function updateItem(){
    this.previousElementSibling.innerHTML = this.value;
    // the sibling <span> elements value is changed to the edit's value.
    this.parentNode.className = "";
    // the parent <li> no longer has a class
}

function itemKeypress(event){
    if (event.which === 13){
        // checks if the keypressed is enter (13)
        updateItem.call(this)
        // passes the element you are on from keypress to updateItem
    }else{
        return
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const addItemButton = document.getElementById('add-item');
    const listContainer = document.querySelector(".comment > p");
    
    addItemButton.addEventListener('click', () => {
        const listAddElement = document.getElementById("list-add");

        console.log("list add element", listAddElement);
        const listAddElementValue = listAddElement.value;
        console.log("list add element value", listAddElementValue);

        const listItem = document.createElement('p');
        listItem.innerText = listAddElementValue;

        const listItemDelete = document.createElement('button');
        listItemDelete.innerText = "delete"

        listContainer.appendChild(listItem);
        listContainer.appendChild(listItemDelete);

        listAddElement.value = ""
    });

});
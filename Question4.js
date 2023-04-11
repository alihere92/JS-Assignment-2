function addListItem() {
    const li = document.createElement("li");
    li.textContent = "New item";
    const ul = document.getElementById("myList");
    ul.appendChild(li);
  }
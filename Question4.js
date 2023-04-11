function addListItem() {
    const li = document.createElement("li");
    li.textContent = "New list";
    const ul = document.getElementById("myList");
    ul.appendChild(li);
  }